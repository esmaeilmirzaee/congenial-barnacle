import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import store from './store';

import './assets/index.css';

import App from './components/App';

const divElement = document.createElement('div');
divElement.className = 'root';
document.body.appendChild(divElement);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.root'),
);
