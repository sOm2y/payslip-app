//@flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

import './setupTest'; // enzyme setup

describe('The application', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should renders without crashing even for smoke testing', () => {
    shallow(<App />);
  });
});
