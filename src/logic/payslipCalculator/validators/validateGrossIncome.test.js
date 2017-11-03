//@flow

import validateGrossIncome from './validateGrossIncome';
import { SHOULD_POSITIVE } from './validateGrossIncome.message';

describe('validateGrossIncome', () => {
  it('should return falsely when input is negative', () => {
    const input = -1;
    const result = validateGrossIncome(input);

    expect(result.isInvalid).toBe(true);
    expect(result.reason).toBe(SHOULD_POSITIVE);
  });

  it('should return truely when input is positive', () => {
    const input = 199.3332;
    const result = validateGrossIncome(input);

    expect(result.isInvalid).toBe(false);
  });

  it('should return falsely when input is zero', () => {
    const input = 0;
    const result = validateGrossIncome(input);

    expect(result.isInvalid).toBe(true);
    expect(result.reason).toBe(SHOULD_POSITIVE);
  });
});
