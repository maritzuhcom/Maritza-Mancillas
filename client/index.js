import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import axios from 'axios';

import Routes from '../Routes';
import rootReducer from './reducers/rootReducer';

require('babel-polyfill');

const axiosInstance = axios.create({
  baseURL: '/api',
});

const store = createStore(
  rootReducer,
  window.INITIAL_STATE,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument(axiosInstance),
    ),
  ),
);

Loadable.preloadReady().then(() => {
  const root: Element = document.querySelector('#root') || window.body;

  ReactDOM.hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <div>
          {renderRoutes(Routes)}
        </div>
      </BrowserRouter>
    </Provider>,
    root,
  );
});
