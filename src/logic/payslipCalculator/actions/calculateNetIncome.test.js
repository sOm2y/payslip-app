//@flow

import calculateNetIncome from './calculateNetIncome';

describe('calculateNetIncome', () => {
  it('should return 900 when grossIncome is 1000 and incomeTax is 100', () => {
    const grossIncome = 1000;
    const incomeTax = 100;

    const result = calculateNetIncome({ grossIncome, incomeTax });

    expect(result).toBe(900);
  });
});
