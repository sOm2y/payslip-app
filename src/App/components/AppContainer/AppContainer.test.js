//@flow
import React from 'react';
import AppContainer from './AppContainer';
import renderer from 'react-test-renderer';

describe('AppContainer', () => {
  it('should renders correctly', () => {
    const tree = renderer.create(<AppContainer>hello</AppContainer>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
