//@flow

import Decimal from 'decimal.js';
import divideAnnualSalaryBy12AndRound from './divideAnnualSalaryBy12AndRound';

describe('divideBy12AndRound', () => {
  it('should return 5004 when input is 60050', () => {
    const input = 60050;
    const roundingMethod = (input: number) => {
      const value = new Decimal(input);

      return value.round().toNumber();
    };

    expect(
      divideAnnualSalaryBy12AndRound(roundingMethod)({
        annualSalary: input
      })
    ).toBe(5004);
  });
});
