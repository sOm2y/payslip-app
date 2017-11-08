//@flow

/**
 * it should be always positive
 */
import performValidate from './core/performValidate';
import { SHOULD_POSITIVE, EMPTY_VALUE } from './validateAnnualSalary.message';

export function shouldAlwaysPositive(input: number): ValidationResult {
  if (input === null || typeof input === 'undefined' || Number.isNaN(input)) {
    return { isInvalid: true, reason: EMPTY_VALUE };
  }

  return input <= 0
    ? {
      isInvalid: true,
      reason: SHOULD_POSITIVE
    }
    : { isInvalid: false };
}

export default (input: AnnualSalaryInput) => performValidate(shouldAlwaysPositive, input);
