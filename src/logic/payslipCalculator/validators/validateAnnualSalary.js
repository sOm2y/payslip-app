//@flow

/**
 * it should be always positive
 */
import performValidate from './core/performValidate';
import { SHOULD_POSITIVE } from './validateAnnualSalary.message';

export function shouldAlwaysPositive(
  input: number
): ValidationResult {
  return input <= 0
    ? {
      isInvalid: true,
      reason: SHOULD_POSITIVE
    }
    : { isInvalid: false };
}

export default (input: AnnualSalaryInput) =>
  performValidate(shouldAlwaysPositive, input);
