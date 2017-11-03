//@flow

/**
 * it should be always positive
 */

import { SHOULD_POSITIVE } from './validateGrossIncome.message';

function shouldAlwaysPositive(input: number): ValidationResult {
  if (input <= 0) {
    return {
      isInvalid: true,
      reason: SHOULD_POSITIVE
    };
  }

  return { isInvalid: false };
}

export default shouldAlwaysPositive;
