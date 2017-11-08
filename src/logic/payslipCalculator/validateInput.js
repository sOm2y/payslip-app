//@flow

/**
 * Perfom validation on input values
 */

import validateName from './validators/validateName';
import validateAnnualSalary from './validators/validateAnnualSalary';
import validateSuperRate from './validators/validateSuperRate';
import validatePaymentStartDate from './validators/validatePaymentStartDate';

function validateInput(input: PayslipInput): ValidationResults {
  const noError = {};
  let errors = noError;
  [
    validateName({
      firstname: input.firstname,
      lastname: input.lastname
    }),
    validateAnnualSalary({ annualSalary: input.annualSalary }),
    validateSuperRate({ superRate: input.superRate }),
    validatePaymentStartDate({ paymentStartDate: input.paymentStartDate })
  ]
    .filter((result) => result.isInvalid)
    .forEach((result) => {
      errors = { ...errors, ...result.reasons };
    });

  return errors === noError ? { isInvalid: false } : { isInvalid: true, reasons: errors };
}

export default validateInput;
