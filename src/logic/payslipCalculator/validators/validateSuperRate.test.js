//@flow

import { validateSuperRate } from './validateSuperRate';
import { NO_LARGER_THAN_50_PERCENT, NO_NEGATIVE, EMPTY_VALUE } from './validateSuperRate.message';
describe('validateSuperRate', () => {
  it('should response falsy when input is 1', () => {
    const input = 1;
    const result = validateSuperRate(input);
    expect(result.isInvalid).toBe(true);
    expect(result.reason).toBe(NO_LARGER_THAN_50_PERCENT);
  });

  it('should response falsy when input is -0.01', () => {
    const input = -0.01;
    const result = validateSuperRate(input);

    expect(result.isInvalid).toBe(true);
    expect(result.reason).toBe(NO_NEGATIVE);
  });

  it('should response truely when input is 0', () => {
    const input = 0;
    const result = validateSuperRate(input);
    expect(result.isInvalid).toBe(false);
  });

  it('should response truely when input is 0.5', () => {
    const input = 0.5;
    const result = validateSuperRate(input);
    expect(result.isInvalid).toBe(false);
  });

  it('should response falsy when input is NaN/null/undefined', () => {
    expect(validateSuperRate(null).reason).toBe(EMPTY_VALUE);
    expect(validateSuperRate(NaN).reason).toBe(EMPTY_VALUE);
    expect(validateSuperRate(undefined).reason).toBe(EMPTY_VALUE);
  });
});
