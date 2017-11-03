//@flow

/**
 * 
 * the app startup. do all kind of registration/settings/global stuff here.
 * 
 */

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const render = (Comp) => {
  const root = document.getElementById('root');

  if (root === null)
    throw new Error(
      'root element not exist, please check html template for #root'
    );
  ReactDOM.render(<Comp />, root);
};

registerServiceWorker();
render(App);

// Enable hmr
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}
