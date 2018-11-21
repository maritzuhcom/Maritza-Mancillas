// @flow
/* eslint no-console: 0 */
/* eslint flowtype/no-weak-types: 0 */
import { matchRoutes } from 'react-router-config';

import map from 'lodash/map';
import reduce from 'lodash/reduce';
import isEmpty from 'lodash/isEmpty';
import forEach from 'lodash/forEach';

import Routes from '../../Routes';
import renderHelper from '../utils/htmlFactory';
import storeHelper from '../utils/storeFactory';
import rootReducer from '../../client/reducers/rootReducer';

function htmlRenderer(req, res) {
  // create redux store
  const store = storeHelper(req);

  const routes = matchRoutes(Routes, req.path);

  const componentFetches = reduce(routes, (
    accum,
    { route },
  ) => {
    if (isEmpty(route.loadData)) {
      return accum;
    }

    accum.push(...map(route.loadData, storeReq => storeReq(store)));

    return accum;
  }, []);

  // array for keeping track of 'loadData's
  const componentLoads = [];

  // for every component load, force the requests to resolve
  // even if it fails because we still want to show something, anything lol
  forEach(componentFetches, (promise) => {
    if (!promise) {
      return;
    }

    componentLoads.push(new Promise((resolve) => {
      promise.then(resolve).catch(resolve);
    }));
  });

  Promise.all(componentLoads).then(() => {
    const context = {
      url: '',
      notFound: false,
    };
    const content = renderHelper(req, { ...store }, context);

    if (context.url) {
      res.redirect(301, context.url);
      return;
    }

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
}

export default htmlRenderer;
