//@flow
import mapPayPeriod from './mapPayPeriod';

describe('mapPayPeriod', () => {
  it('should map pay period to march', () => {
    const march = '2';
    const payPeriod = mapPayPeriod({ paymentStartDate: march });

    expect(payPeriod).toBe('1st March - 31st March, 2018');
  });

  it('should throw error when input is null/undefined/empty', () => {
    expect(() => mapPayPeriod({ paymentStartDate: undefined })).toThrow();
    expect(() => mapPayPeriod({ paymentStartDate: '' })).toThrow();
    expect(() => mapPayPeriod({ paymentStartDate: null })).toThrow();
  });

  it('should throw error when input is wrongly', () => {
    expect(() => mapPayPeriod({ paymentStartDate: 'foo' })).toThrow();
  });
});
