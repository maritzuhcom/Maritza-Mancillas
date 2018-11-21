import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  test: () => ({ test: 'test' }),
});

export default rootReducer;
