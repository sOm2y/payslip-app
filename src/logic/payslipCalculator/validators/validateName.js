//@flow

import { INPUT_NO_EMPTY, INPUT_NO_NULL, INPUT_NO_UNDEFINED } from './validateName.message';

import performValidate from './core/performValidate';

export function validateStringNotNull(value: string): ValidationResult {
  if (typeof value === 'undefined') {
    return {
      isInvalid: true,
      reason: INPUT_NO_UNDEFINED
    };
  }

  if (value === null) {
    return {
      isInvalid: true,
      reason: INPUT_NO_NULL
    };
  }

  if (value.length === 0) {
    return {
      isInvalid: true,
      reason: INPUT_NO_EMPTY
    };
  }

  return { isInvalid: false };
}

export default (input: NameInput) => performValidate(validateStringNotNull, input);
