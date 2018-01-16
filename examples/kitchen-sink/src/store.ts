import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import { AppState, reducer } from './reducer';

// Not much of interest in here. See the reducer file for the juicy bits
export function configureStore(initialState?: AppState) {
  let middleware = applyMiddleware(reduxPackMiddleware);

  if (process.env.NODE_ENV === 'development') {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(reducer, initialState, middleware) as Store<
    AppState
  >;

  return store;
}
