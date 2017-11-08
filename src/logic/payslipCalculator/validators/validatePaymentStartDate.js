//@flow

import { validateStringNotNull } from './validateName';

import performValidate from './core/performValidate';
import { OUT_OF_RANGE } from './validatePaymentStartDate.message';

export function validatePaymentStartDate(notNullValidation: string => ValidationResult) {
  return (input: string): ValidationResult => {
    const notNull = notNullValidation(input);
    if (notNull.isInvalid) return notNull;

    const from0To11 = Array.from(new Array(12)).map((_, idx) => idx.toString());

    if (!from0To11.includes(input)) return { isInvalid: true, reason: OUT_OF_RANGE };

    return { isInvalid: false };
  };
}

export default (input: PaymentStartDateInput) => performValidate(validatePaymentStartDate(validateStringNotNull), input);
