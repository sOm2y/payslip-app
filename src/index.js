//@flow

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const render = (Comp) => {
  const root = document.getElementById('root');
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
