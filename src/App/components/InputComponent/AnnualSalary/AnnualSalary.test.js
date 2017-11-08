//@flow

import React from 'react';

import AnnualSalary from './AnnualSalary';
import { shallow, mount } from 'enzyme';
import '../../../setupTest'; // enzyme setup

describe('AnnualSalary', () => {
  it('should only accept positive number, otherwise will convert into positive.', () => {
    const onChangeStub = jest.fn();
    const sut = mount(<AnnualSalary onChange={onChangeStub} />);

    sut.find('input').simulate('change', { target: { value: '-3', focus: () => {} } });
    expect(onChangeStub).toHaveBeenLastCalledWith('3');
  });

  it('should only accept numbers, otherwise show nothing.', () => {
    const onChangeStub = jest.fn();
    const sut = mount(<AnnualSalary onChange={onChangeStub} />);

    sut.find('input').simulate('change', { target: { value: 'foo', focus: () => {} } });
    expect(onChangeStub).toHaveBeenCalledTimes(0);
  });

  it('should render fail resons if there is any', () => {
    const reasons = ['something silly'];

    const sut = shallow(<AnnualSalary failReasons={reasons} />);

    expect(sut.html()).toContain('something silly');
  });
});
