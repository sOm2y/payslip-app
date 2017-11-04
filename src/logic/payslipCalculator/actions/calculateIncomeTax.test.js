//@flow

import calculateIncomeTax from './calculateIncomeTax';
import { incrementAfter50Rounding } from './performRounding';

describe('calculateIncomeTax', () => {
  it('should response 922 if salary is 60050', () => {
    const result = calculateIncomeTax(incrementAfter50Rounding)({
      annualSalary: 60050
    });
    expect(result).toBe(922);
  });

  it('should call round with 0 if salary is 0', () => {
    const roundStub = jest.fn();
    calculateIncomeTax(roundStub)({ annualSalary: 0 });

    expect(roundStub).toBeCalledWith(0);
  });

  it('should call round with 0 if salary is 18200', () => {
    const roundStub = jest.fn();
    calculateIncomeTax(roundStub)({ annualSalary: 18200 });

    expect(roundStub).toBeCalledWith(0);
  });

  it('should call round with 0.015833333333333335 if salary is 18201', () => {
    const roundStub = jest.fn();
    calculateIncomeTax(roundStub)({ annualSalary: 18201 });

    expect(roundStub).toBeCalledWith(0.015833333333333335);
  });

  it('should call round with 297.6666666666667 if salary is 37000', () => {
    const roundStub = jest.fn();
    calculateIncomeTax(roundStub)({ annualSalary: 37000 });

    expect(roundStub).toBeCalledWith(297.6666666666667);
  });

  it('should call round with 297.69374999999997 if salary is 37001', () => {
    const roundStub = jest.fn();
    calculateIncomeTax(roundStub)({ annualSalary: 37001 });

    expect(roundStub).toBeCalledWith(297.69374999999997);
  });

  it('should call round with 1462.25 if salary is 80000', () => {
    const roundStub = jest.fn();
    calculateIncomeTax(roundStub)({ annualSalary: 80000 });

    expect(roundStub).toBeCalledWith(1462.25);
  });

  it('should call round with 1462.2808333333332 if salary is 80001', () => {
    const roundStub = jest.fn();
    calculateIncomeTax(roundStub)({ annualSalary: 80001 });

    expect(roundStub).toBeCalledWith(1462.2808333333332);
  });

  it('should call round with 4545.583333333333 if salary is 180000', () => {
    const roundStub = jest.fn();
    calculateIncomeTax(roundStub)({ annualSalary: 180000 });

    expect(roundStub).toBeCalledWith(4545.583333333333);
  });

  it('should call round with 4545.620833333333 if salary is 180001', () => {
    const roundStub = jest.fn();
    calculateIncomeTax(roundStub)({ annualSalary: 180001 });

    expect(roundStub).toBeCalledWith(4545.620833333333);
  });
});
