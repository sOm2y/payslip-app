//@flow

import divideAnnualSalaryBy12AndRound from './divideAnnualSalaryBy12AndRound';
import { incrementAfter50Rounding } from './performRounding';
describe('divideBy12AndRound', () => {
  it('should response 5004 when input is 60050', () => {
    const input = 60050;

    const result = divideAnnualSalaryBy12AndRound(
      incrementAfter50Rounding
    )({
      annualSalary: input
    });

    expect(result).toBe(5004);
  });

  it('should call round with 5004.166666666667 when input is 60050', () => {
    const input = 60050;
    const roundStub = jest.fn();
    divideAnnualSalaryBy12AndRound(roundStub)({
      annualSalary: input
    });

    expect(roundStub).toBeCalledWith(5004.166666666667);
  });
});
