//@flow

/**
 * integration test for the package
 */

import payslipCalculator from './index';

describe('payslipCalculator', () => {
  it('should reproduce the sample data 1', () => {
    const input: PayslipInput = {
      firstname: 'David',
      lastname: 'Rudd',
      annualSalary: 60050,
      superRate: 0.09,
      paymentStartDate: '2'
    };
    const result = payslipCalculator(input);

    expect(result).toEqual({
      isInvalid: false,
      value: {
        name: `${input.firstname} ${input.lastname}`,
        payPeriod: '1st March - 31st March, 2018',
        grossIncome: 5004,
        incomeTax: 922,
        netIncome: 4082,
        super: 450
      }
    });
  });

  it('should reproduct the sample data 2', () => {
    const input: PayslipInput = {
      firstname: 'Ryan',
      lastname: 'Chen',
      annualSalary: 120000,
      superRate: 0.1,
      paymentStartDate: '2'
    };
    const result = payslipCalculator(input);

    expect(result).toEqual({
      isInvalid: false,
      value: {
        name: `${input.firstname} ${input.lastname}`,
        payPeriod: '1st March - 31st March, 2018',
        grossIncome: 10000,
        incomeTax: 2696,
        netIncome: 7304,
        super: 1000
      }
    });
  });

  it('shoudld return falsy when input data have some problem', () => {
    const input: PayslipInput = {
      firstname: 'Ryan',
      lastname: 'Chen',
      annualSalary: 120000,
      superRate: -0.1,
      paymentStartDate: '3'
    };

    const result = payslipCalculator(input);

    expect(result).toEqual({
      isInvalid: true,
      reasons: {
        superRate: 'input argument cannot be negative'
      }
    });
  });
});
