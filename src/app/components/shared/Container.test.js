//@flow

import React from 'react';
import Container from './Container';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import '../../setupTest'; // enzyme setup

describe('Container', () => {
  it('should renders without crashing even for shallow renderer', () => {
    shallow(<Container />);
  });

  it('should render children', () => {
    const Children = () => <div>foo</div>;

    const result = shallow(
      <Container>
        <Children />
      </Container>
    );

    expect(result).toContainReact(<Children />);
  });

  it('should match snapshot', () => {
    const tree = renderer.create(<Container>hello</Container>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
