//@flow

import { rejectEmptyNullUndefined as stringGurad } from './stringGuard';

describe('stringGurad', () => {
  it('should return true when input is null', () => {
    expect(stringGurad(null)).toBe(true);
  });

  it('should return true when input is undefined', () => {
    expect(stringGurad(undefined)).toBe(true);
  });

  it('should return true when input is empty', () => {
    expect(stringGurad('')).toBe(true);
  });

  it('should return true when input is not string', () => {
    expect(stringGurad({})).toBe(true);
  });

  it('should return false when input is legimate', () => {
    expect(stringGurad('good')).toBe(false);
  });
});
