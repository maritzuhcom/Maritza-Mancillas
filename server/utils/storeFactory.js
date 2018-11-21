import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import axios from 'axios';

import rootReducer from '../../client/reducers/rootReducer';

export default () => {
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  const axiosInstance = axios.create({
    headers: defaultHeaders,
  });

  const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(
      thunk.withExtraArgument(axiosInstance),
    )),
  );

  return store;
};
