//@flow

import validatePaymentStartDate, { validatePaymentStartDate as underlineFn } from './validatePaymentStartDate';
import { OUT_OF_RANGE } from './validatePaymentStartDate.message';
import { INPUT_NO_EMPTY, INPUT_NO_NULL, INPUT_NO_UNDEFINED } from './validateName.message';

describe('validatePaymentStartDate', () => {
  // integration testing
  it('should response truly result', () => {
    const result = validatePaymentStartDate({ paymentStartDate: '0' });
    expect(result.isInvalid).toBe(false);
    expect(result.reasons).toBe(undefined);
  });

  it('should response falsy result when input is not 0-11', () => {
    const result = validatePaymentStartDate({ paymentStartDate: 'foo' });

    expect(result.isInvalid).toBe(true);
    expect(result.reasons).toEqual({ paymentStartDate: OUT_OF_RANGE });
  });

  // unit testing
  it('should response falsy reult when notNullValidation response falsy ', () => {
    const notNullValidation = jest.fn();
    const falsyResult = {
      isInvalid: true,
      reason: 'something not right'
    };

    notNullValidation.mockReturnValue(falsyResult);

    const result = underlineFn(notNullValidation)('doesnt matter');

    expect(notNullValidation).toHaveBeenCalledTimes(1);
    expect(result).toBe(falsyResult);
  });
});
