//@flow
import React from 'react';
import Name from './Name';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import '../../../setupTest'; // enzyme setup
describe('Name', () => {
  it('should render First Name as label', () => {
    const sut = shallow(<Name type="firstname" />);

    expect(sut.html()).toContain('First Name');
  });

  it('should render Last Name as label', () => {
    const sut = shallow(<Name type="lastname" />);
    expect(sut.html()).toContain('Last Name');
  });

  it('should throw Error when type is not firstname/lastname', () => {
    expect(() => shallow(<Name type="foo" />)).toThrow();
  });

  it('should render fail message', () => {
    const reasons = ['oops'];

    const sut = shallow(<Name failReasons={reasons} type="firstname" />);

    expect(sut.html()).toContain(reasons[0]);
  });

  it('should only accept numbers, otherwise show nothing.', () => {
    const onChangeStub = jest.fn();
    const sut = mount(<Name onChange={onChangeStub} type="firstname" />);

    sut.find('input').simulate('change', { target: { value: 'foo', focus: () => {} } });
    expect(onChangeStub).toHaveBeenCalledWith('foo');
  });
});
