//@flow
import { validateName } from './validateName';

import {
  INPUT_NO_EMPTY,
  INPUT_NO_NULL,
  INPUT_NO_UNDEFINED
} from './validateName.message';

describe('validator', () => {
  describe('validateName', () => {
    it('should return truthy validation result when the name is valid', () => {
      const name = 'John';

      const result = validateName(name);

      expect(result.isInvalid).toBe(false);
    });

    it('should return falsy result when the name is empty', () => {
      const name = '';
      const result = validateName(name);
      expect(result.isInvalid).toBe(true);
      expect(result.reason).toEqual(INPUT_NO_EMPTY);
    });

    it('should return falsy result when the name is null', () => {
      const name = null;
      const result = validateName(name);
      expect(result.isInvalid).toBe(true);
      expect(result.reason).toEqual(INPUT_NO_NULL);
    });

    it('should return falsy result when the name is undefined', () => {
      const name = undefined;
      const result = validateName(name);
      expect(result.isInvalid).toBe(true);
      expect(result.reason).toEqual(INPUT_NO_UNDEFINED);
    });
  });
});
