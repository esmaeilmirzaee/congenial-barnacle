import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import './assets/index.css';

import App from './components/App';

const divElement = document.createElement('div');
divElement.className = 'root';
document.body.appendChild(divElement);

ReactDOM.render(
  // <div className='ui container'>
  <App />,
  // </div>,
  document.querySelector('.root'),
);
