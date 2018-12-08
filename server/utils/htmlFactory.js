import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import serialize from 'serialize-javascript';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';

import map from 'lodash/map';
import forEach from 'lodash/forEach';

import stats from '../../dist/react-loadable.json';
import Routes from '../../Routes';

const helmet = Helmet.renderStatic();
const sheet = new ServerStyleSheet();

export default (
  { path },
  store,
  context,
) => {
  const modules = [];

  const content = renderToString(
    <Loadable.Capture report={(moduleName) => {
      modules.push(moduleName);
    }}
    >
      <Provider store={store}>
        <StaticRouter location={path} context={context}>
          <StyleSheetManager sheet={sheet.instance}>
            <div>
              { renderRoutes(Routes) }
            </div>
          </StyleSheetManager>
        </StaticRouter>
      </Provider>
    </Loadable.Capture>,
  );

  const bundles = getBundles(stats, modules);
  const styleTags = sheet.getStyleTags();

  const styles = [];
  const scripts = [];

  forEach(bundles, (bundle) => {
    if (bundle.file.endsWith('.css')) {
      styles.push(bundle);
    }

    if (bundle.file.endsWith('.js')) {
      scripts.push(bundle);
    }
  });

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>
        <link href="https://fonts.googleapis.com/css?family=PT+Sans+Caption|Sedgwick+Ave|Yantramanav:100,600|Marcellus" rel="stylesheet">
        ${map(styles, style => `<link href="${style.file}" rel="stylesheet"/>`).join('\n')}
        ${styleTags}
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        ${map(scripts, script => `<script src="/${script.file}"></script>`).join('\n')}
        <script src="/vendor.js"></script>
        <script src="/main.js"></script>
      </body>
    </html>
  `;
};
