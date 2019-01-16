import { matchRoutes } from 'react-router-config';

import map from 'lodash/map';
import reduce from 'lodash/reduce';
import isEmpty from 'lodash/isEmpty';
import forEach from 'lodash/forEach';
import isNull from 'lodash/isNull';

import Routes from '../../Routes';
import renderHelper from '../utils/htmlFactory';
import storeHelper from '../utils/storeFactory';
import rootReducer from '../../client/reducers/rootReducer';

function callStores(
  loadList,
  store,
  req,
  cb,
) {
  if (!loadList.length) {
    cb();
    return null;
  }

  const current = loadList.shift();

  return current(store, req).then(() => {
    callStores(loadList, store, req, cb);
  }).catch((e) => {
    console.log(e);
    callStores(loadList, store, req, cb);
  });
}

function asyncRender(
  routes,
  store,
  res,
  req,
) {
  // initial fetches load
  const componentLoads = [];

  const componentFetches = reduce(routes, (
    accum,
    { route },
  ) => {
    if (isEmpty(route.loadData)) {
      return accum;
    }

    accum.push(...map(route.loadData, storeReq => storeReq(store, req)));

    return accum;
  }, []);

  // for every component load, force the requests to resolve
  // even if it fails because we still want to show something, anything lol
  forEach(componentFetches, (promise) => {
    if (!promise) {
      return;
    }

    componentLoads.push(new Promise((resolve) => {
      promise.then(resolve).catch((e) => {
        console.log(e);
        resolve();
      });
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

function htmlBlockingRenderer(req, res) {
  // create redux store
  const store = storeHelper(req);
  // routes array
  const routes = matchRoutes(Routes, req.path);

  // blocking calls
  const blockCalList = reduce(
    routes,
    (accum, { route }) => {
      if (isNull(route.blockingLoadData) || isEmpty(route.blockingLoadData)) {
        return accum;
      }

      accum.push(...route.blockingLoadData);
      return accum;
    },
    [],
  );

  if (!isEmpty(blockCalList)) {
    callStores(
      blockCalList,
      store,
      req,
      asyncRender.bind(this, routes, store, res, req),
    );
    return;
  }

  asyncRender(routes, store, res, req);
}

export default htmlBlockingRenderer;
