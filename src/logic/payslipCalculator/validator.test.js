import { validateName } from './validator';
import {
  INPUT_NO_EMPTY,
  INPUT_NO_NULL,
  INPUT_NO_UNDEFINED
} from './validatorMessage';

describe('validator', () => {
  describe('validateName', () => {
    it('should return truthy validation result when the name is valid', () => {
      const name = 'John';

      const result = validateName(name);
      expect(result.isValid).toBe(true);
      expect(result.reason).toBe(undefined);
    });

    it('should return falsy result when the name is empty', () => {
      const name = '';
      const result = validateName(name);
      expect(result.isValid).toBe(false);
      expect(result.reason).toBe(INPUT_NO_EMPTY);
    });

    it('should return falsy result when the name is null', () => {
      const name = '';
      const result = validateName(name);
      expect(result.isValid).toBe(false);
      expect(result.reason).toBe(INPUT_NO_NULL);
    });

    it('should return falsy result when the name is undefined', () => {
      const name = '';
      const result = validateName(name);
      expect(result.isValid).toBe(false);
      expect(result.reason).toBe(INPUT_NO_UNDEFINED);
    });
  });
});
