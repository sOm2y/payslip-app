//@flow

import calculateSuper from './calculateSuper';

describe('calculateSuper', () => {
  it('should return 450.36 when input is 5004 and 9%', () => {
    const grossIncome = 5004;
    const superRate = 0.09;
    const roundStub = jest.fn();

    calculateSuper(roundStub)({ grossIncome, superRate });

    expect(roundStub).toBeCalledWith(450.36);
  });

  it('should return 1000 when input is 10000 and 10%', () => {
    const grossIncome = 10000;
    const superRate = 0.1;
    const roundStub = jest.fn();

    calculateSuper(roundStub)({ grossIncome, superRate });

    expect(roundStub).toBeCalledWith(1000);
  });

  it('should return 0 when input is 0 and 0%', () => {
    const grossIncome = 0;
    const superRate = 0;
    const roundStub = jest.fn();

    calculateSuper(roundStub)({ grossIncome, superRate });

    expect(roundStub).toBeCalledWith(0);
  });
});
