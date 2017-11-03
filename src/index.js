//@flow

/**
 * 
 * the app startup. do all kind of registration/settings/global stuff here.
 * 
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const render = (Comp) => {
  const root = document.getElementById('root');
  //FIXME: ReactDOM.render accept an Element while `root` is HTMLElement
  // this probably is an editor bug.
  // Should do no harm, but need to be fixed
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
