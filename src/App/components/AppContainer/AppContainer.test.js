//@flow
import React from 'react';
import AppContainer from './AppContainer';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import '../../setupTest'; // enzyme setup

describe('AppContainer', () => {
  it('should match snapshot of hide result', () => {
    const tree = renderer.create(<AppContainer input={<div>foo</div>} result={<div>bar</div>} showResult={false} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot of show result', () => {
    const html = shallow(<AppContainer input={<div>foo</div>} result={<div>bar</div>} showResult={true} />).html();

    expect(html).toMatchSnapshot();
  });
});
