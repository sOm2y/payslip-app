//@flow

import React from 'react';
import ResultComponent from './ResultComponent';
import renderer from 'react-test-renderer';

it('should match snapshot', () => {
  const payslip: Payslip = {
    name: 'John Doe',
    payPeriod: '1st March - 31st March, 2018',
    grossIncome: 10000,
    incomeTax: 2696,
    netIncome: 7304,
    super: 1000
  };

  const tree = renderer.create(<ResultComponent result={payslip} />).toJSON();

  expect(tree).toMatchSnapshot();
});
