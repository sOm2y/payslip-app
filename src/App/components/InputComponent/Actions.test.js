//@flow

import React from 'react';
import Actions from './Actions';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import '../../setupTest'; // enzyme setup

describe('Actions', () => {
  it('should renders without crashing even for shallow renderer', () => {
    shallow(<Actions onClickOk={() => {}} onClickReset={() => {}} />);
  });

  it('should have ok/reset action', () => {
    const ok = jest.fn();
    const reset = jest.fn();
    const actions = shallow(<Actions onClickOk={ok} onClickReset={reset} />);
    actions.find('.btn_ok').simulate('click');
    actions.find('.btn_reset').simulate('click');

    expect(ok).toHaveBeenCalledTimes(1);
    expect(reset).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    const tree = renderer.create(<Actions onClickOk={() => {}} onClickReset={() => {}} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
