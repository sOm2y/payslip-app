//@flow

import React from 'react';
import InputComponent from './InputComponent';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import '../../setupTest'; // enzyme setup

describe('Actions', () => {
  it('should renders without crashing even for shallow renderer', () => {
    shallow(<InputComponent onSubmit={jest.fn()} />);
  });

  it('should have ok action', () => {
    const onSubmitStub = jest.fn();
    const state = {
      firstname: 'foo',
      lastname: 'bar',
      annualSalary: '60050',
      superRate: '0.09',
      paymentStartDate: '3',
      failReasons: {}
    };
    onSubmitStub.mockReturnValue({
      isInvalid: false
    });
    const sut = mount(<InputComponent onSubmit={onSubmitStub} onReset={jest.fn()} />);

    sut.setState(state);
    sut
      .find('.btn_ok')
      .first()
      .simulate('click');

    expect(onSubmitStub).toHaveBeenCalledTimes(1);
  });

  it('should have reset action', () => {
    const onResetStub = jest.fn();
    const state = {
      firstname: 'foo',
      lastname: 'bar',
      annualSalary: '60050',
      superRate: '0.09',
      paymentStartDate: '3',
      failReasons: {}
    };

    const sut = mount(<InputComponent onSubmit={jest.fn()} onReset={onResetStub} />);

    sut.setState(state);
    sut
      .find('.btn_reset')
      .first()
      .simulate('click');

    expect(onResetStub).toHaveBeenCalledTimes(1);

    expect(sut.state()).toEqual({
      firstname: '',
      lastname: '',
      annualSalary: '',
      superRate: '',
      paymentStartDate: '',
      failReasons: {}
    });
  });

  it('should be able to accept input', () => {
    const sut = mount(<InputComponent onSubmit={jest.fn()} onReset={jest.fn()} />);

    // the first input field should be first name, because it is on the top
    sut
      .find('input')
      .first()
      .simulate('change', { target: { value: 'foo', focus: () => {} } });

    expect(sut.state().firstname).toBe('foo');
  });

  it('should response to failure', () => {
    const onSubmitStub = jest.fn();

    const failReason = { firstname: 'foo' };

    onSubmitStub.mockReturnValue({
      isInvalid: true,
      reasons: failReason
    });

    const sut = mount(<InputComponent onSubmit={onSubmitStub} onReset={jest.fn()} />);

    sut
      .find('.btn_ok')
      .first()
      .simulate('click');
    expect(sut.state().failReasons).toBe(failReason);
  });

  it('should match snapshot', () => {
    const tree = renderer.create(<InputComponent onSubmit={jest.fn()} onReset={jest.fn()} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
