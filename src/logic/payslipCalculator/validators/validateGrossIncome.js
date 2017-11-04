//@flow

/**
 * it should be always positive
 */
import performValidate from './core/performValidate';
import { SHOULD_POSITIVE } from './validateGrossIncome.message';

export function shouldAlwaysPositive(
  input: number
): ValidationResult {
  if (input <= 0) {
    return {
      isInvalid: true,
      reason: SHOULD_POSITIVE
    };
  }

  return { isInvalid: false };
}

export default (input: AnnualSalaryInput) =>
  performValidate(shouldAlwaysPositive, input);
