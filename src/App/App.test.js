//@flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('The application', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});
