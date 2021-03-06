import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';

const createAppStore = compose(
  applyMiddleware(thunkMiddleware)
)(createStore);

export default () => {
  const store = createAppStore(rootReducer);

  // store.subscribe(() => {
  //   console.log(store.getState());
  // });

  return store;
};
