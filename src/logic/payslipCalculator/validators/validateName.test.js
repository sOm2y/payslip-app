//@flow
import { validateStringNotNull } from './validateName';

import { INPUT_NO_EMPTY, INPUT_NO_NULL, INPUT_NO_UNDEFINED } from './validateName.message';

describe('validateName', () => {
  it('should return truthy validation result when the name is valid', () => {
    const name = 'John';
    const result = validateStringNotNull(name);

    expect(result.isInvalid).toBe(false);
  });

  it('should return falsy result when the name is empty', () => {
    const name = '';
    const result = validateStringNotNull(name);
    expect(result.isInvalid).toBe(true);
    expect(result.reason).toEqual(INPUT_NO_EMPTY);
  });

  it('should return falsy result when the name is null', () => {
    const name = null;
    const result = validateStringNotNull(name);
    expect(result.isInvalid).toBe(true);
    expect(result.reason).toEqual(INPUT_NO_NULL);
  });

  it('should return falsy result when the name is undefined', () => {
    const name = undefined;
    const result = validateStringNotNull(name);
    expect(result.isInvalid).toBe(true);
    expect(result.reason).toEqual(INPUT_NO_UNDEFINED);
  });
});
