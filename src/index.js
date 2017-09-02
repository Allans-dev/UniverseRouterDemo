import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore();

store.subscribe(() => {
  console.log('index: ', store.getState());
});

ReactDOM.render(
  <Provider store={store}>
  </Provider>
  , document.querySelector('.container'));
