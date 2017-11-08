//@flow

import React from 'react';

import ResultComponent from '../src/App/components/ResultComponent';
import { action } from '@storybook/addon-actions';

const result: Payslip = {
  name: 'John Doe',
  payPeriod: '1st March - 31st March',
  grossIncome: 5004,
  incomeTax: 922,
  netIncome: 4082,
  super: 450
};

export default () => <ResultComponent result={result} />;
