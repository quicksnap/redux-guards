import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { makeAction } from 'redux-guards';

import { configureStore } from './store';
import { Counter } from './Counter';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root'),
);
