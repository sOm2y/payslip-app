//@flow

import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import '../../setupTest'; // enzyme setup
import { renderFailText, doMapState } from './shared';

describe('shared', () => {
  describe('renderFailText', () => {
    it('should render fail message', () => {
      const failMessage = 'foo';
      const element = shallow(renderFailText(failMessage));
      expect(element.html()).toContain(failMessage);
    });

    it('should throw error when input is null/undefined', () => {
      expect(() => renderFailText(undefined)).toThrow();
      expect(() => renderFailText(null)).toThrow();
    });

    it('should match snapshot', () => {
      const tree = renderer.create(renderFailText('fail')).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('doMapState', () => {
    it('should map state data', () => {
      const state = {
        firstname: 'foo',
        lastname: 'bar',
        annualSalary: '30000',
        superRate: '10',
        paymentStartDate: 'wola'
      };

      const result = doMapState(state);

      expect(result.firstname).toEqual(state.firstname);
      expect(result.lastname).toEqual(state.lastname);
      expect(result.paymentStartDate).toEqual(state.paymentStartDate);
      expect(result.annualSalary).toEqual(30000);
      expect(result.superRate).toEqual(0.1);
    });

    it('should throw error when input is null/undefined', () => {
      expect(() => doMapState(null)).toThrow();
      expect(() => doMapState(undefined)).toThrow();
    });

    it('should throw error when state.annualSalary is null/undefined', () => {
      const state = {
        firstname: 'foo',
        lastname: 'bar',
        annualSalary: '30000',
        superRate: '10',
        paymentStartDate: 'wola'
      };

      expect(() => doMapState({ ...state, annualSalary: null })).toThrow();
      expect(() => doMapState({ ...state, annualSalary: undefined })).toThrow();
    });
  });
});
