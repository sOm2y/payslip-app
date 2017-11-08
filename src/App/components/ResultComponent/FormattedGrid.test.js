//@flow
import React from 'react';
import { shallow } from 'enzyme';
import '../../setupTest'; // enzyme setup

import FormattedGrid from './FormattedGrid';

describe('FormattedGrid', () => {
  it('should render a title gird', () => {
    const grid = shallow(<FormattedGrid isTitle value="foo" />);

    expect(grid.html()).toContain('grid-xs-4');
  });

  it('should render the content', () => {
    const grid = shallow(<FormattedGrid isTitle value="foo" />);

    expect(grid.html()).toContain('foo');
  });

  it('should render a money stuff', () => {
    const grid = shallow(<FormattedGrid isMoney value="foo" />);

    expect(grid.html()).toContain('$ foo');
  });
});
