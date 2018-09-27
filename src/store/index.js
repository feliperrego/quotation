import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

const store = createStore(
  rootReducer,
  applyMiddleware(reduxImmutableStateInvariant())
);

export default store;
