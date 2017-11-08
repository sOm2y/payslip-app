//@flow

import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

import './setupTest'; // enzyme setup

describe('The application', () => {
  it('should renders without crashing', () => {
    shallow(<App />);
  });
});
