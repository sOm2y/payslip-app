//@flow

import performValidate from './core/performValidate';
import Decimal from 'decimal.js';
import { NO_LARGER_THAN_50_PERCENT, NO_NEGATIVE, EMPTY_VALUE } from './validateSuperRate.message';
export function validateSuperRate(rate: number): ValidationResult {
  if (rate === null || typeof rate === 'undefined' || Number.isNaN(rate)) {
    return { isInvalid: true, reason: EMPTY_VALUE };
  }
  // em.. we need to be careful about decimal stuff..
  // another solution would be *100
  const rateDecimal = new Decimal(rate);

  return rateDecimal.lessThan(0)
    ? { isInvalid: true, reason: NO_NEGATIVE }
    : rateDecimal.greaterThan(0.5) ? { isInvalid: true, reason: NO_LARGER_THAN_50_PERCENT } : { isInvalid: false };
}

export default (input: SuperRateInput) => performValidate(validateSuperRate, input);
