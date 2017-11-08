//@flow

import React from 'react';
import HeadLine from './HeadLine';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import '../../setupTest'; // enzyme setup

describe('Actions', () => {
  it('should renders without crashing', () => {
    shallow(<HeadLine />);
  });

  it('should contain the title', () => {
    const headline = shallow(<HeadLine />);
    expect(headline.html()).toContain('Please input your detail');
  });

  it('should match snapshot', () => {
    const tree = renderer.create(<HeadLine />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
