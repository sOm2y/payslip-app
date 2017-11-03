//@flow

import {
  INPUT_NO_EMPTY,
  INPUT_NO_NULL,
  INPUT_NO_UNDEFINED
} from './validateName.message';

import performValidate from './core/performValidate';

export function validateName(name: string): ValidationResult {
  if (typeof name === 'undefined') {
    return {
      isInvalid: true,
      reason: INPUT_NO_UNDEFINED
    };
  }

  if (name === null) {
    return {
      isInvalid: true,
      reason: INPUT_NO_NULL
    };
  }

  if (name.length === 0) {
    return {
      isInvalid: true,
      reason: INPUT_NO_EMPTY
    };
  }

  return { isInvalid: false };
}

export default (input: NameInput) =>
  performValidate(validateName, input);
