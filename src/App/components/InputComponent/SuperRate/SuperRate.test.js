//@flow

import React from 'react';

import SuperRate from './SuperRate';
import { shallow, mount } from 'enzyme';
import '../../../setupTest'; // enzyme setup

describe('SuperRate', () => {
  it('should only accept number smaller than 50 inclusive', () => {
    const onChangeStub = jest.fn();
    const sut = mount(<SuperRate onChange={onChangeStub} />);

    sut.find('input').simulate('change', { target: { value: '99', focus: () => {} } });
    expect(onChangeStub).toHaveBeenLastCalledWith('50');
  });

  it('should only accept positive number, otherwise will convert into positive.', () => {
    const onChangeStub = jest.fn();
    const sut = mount(<SuperRate onChange={onChangeStub} />);

    sut.find('input').simulate('change', { target: { value: '-3', focus: () => {} } });
    // the space here is kinda of tricy...
    expect(onChangeStub).toHaveBeenLastCalledWith('3 ');
  });

  it('should only accept numbers, otherwise show nothing.', () => {
    const onChangeStub = jest.fn();
    const sut = mount(<SuperRate onChange={onChangeStub} />);

    sut.find('input').simulate('change', { target: { value: 'foo', focus: () => {} } });
    // the space here is kinda of tricy...
    expect(onChangeStub).toHaveBeenLastCalledWith('');
  });

  it('should render fail resons if there is any', () => {
    const reasons = ['something silly'];

    const sut = shallow(<SuperRate failReasons={reasons} />);

    expect(sut.html()).toContain('something silly');
  });
});
