import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './src/reducers';
import Index from './src/Index';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}
