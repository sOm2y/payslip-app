//@flow

import React from 'react';
import PaymentStartDate from './PaymentStartDate';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import '../../../setupTest'; // enzyme setup

describe('PaymentStartDate', () => {
  it('should render correctly, and maches snapshot', () => {
    const tree = renderer.create(<PaymentStartDate />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render fail reasons correctly', () => {
    const reasons = ['oops'];

    const sut = mount(<PaymentStartDate failReasons={[]} />);

    sut.setProps({ failReasons: reasons });

    expect(sut.html()).toContain(reasons[0]);
  });

  it('should response to select changes', () => {
    const onChangeStub = jest.fn();

    const sut = mount(<PaymentStartDate onChange={onChangeStub} />);

    sut.find('select').simulate('change', { target: { value: '0', focus: () => {} } });

    expect(onChangeStub).toBeCalledWith('0');
  });
});
