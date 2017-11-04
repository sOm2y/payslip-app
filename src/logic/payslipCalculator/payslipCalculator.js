//@flow

/**
 * entry point of the calculator
 */

import validateName from './validators/validateName';
import validateAnnualSalary from './validators/validateAnnualSalary';
import validateSuperRate from './validators/validateSuperRate';

import { incrementAfter50Rounding } from './actions/performRounding';

import concatName from './actions/concatName';
import divideAnnualSalaryBy12AndRound from './actions/divideAnnualSalaryBy12AndRound';
import calculateIncomeTax from './actions/calculateIncomeTax';
import calculateSuper from './actions/calculateSuper';
import calculateNetIncome from './actions/calculateNetIncome';

/**
 * Perfom validation on input values
 */
function _validateInput(input: Input): ValidationResults {
  const noError = {};
  let errors = noError;
  [
    validateName({
      firstname: input.firstname,
      lastname: input.lastname
    }),
    validateAnnualSalary({ annualSalary: input.annualSalary }),
    validateSuperRate({ superRate: input.superRate })
  ]
    .filter(result => result.isInvalid)
    .forEach(result => {
      errors = { ...errors, ...result.reasons };
    });

  return errors === noError ? { isInvalid: false } : { isInvalid: true, reasons: errors };
}

/**
 * calculate the payslip
 */
function calculatePayslip(input: PayslipInput): PayslipCalculationResult {
  const inputValidation = _validateInput(input);
  if (inputValidation.isInvalid) return inputValidation;

  const grossIncome = divideAnnualSalaryBy12AndRound(incrementAfter50Rounding)({
    annualSalary: input.annualSalary
  });

  const superAmount = calculateSuper(incrementAfter50Rounding)({
    superRate: input.superRate,
    grossIncome
  });

  const incomeTax = calculateIncomeTax(incrementAfter50Rounding)({
    annualSalary: incrementAfter50Rounding(input.annualSalary)
  });

  const name = concatName({
    firstname: input.firstname,
    lastname: input.lastname
  });

  const netIncome = calculateNetIncome({
    grossIncome,
    incomeTax
  });

  return {
    isInvalid: false,
    value: {
      name,
      super: superAmount,
      grossIncome,
      incomeTax,
      netIncome,
      payPeriod: input.paymentStartDate // FIXME: this assumuption may be wrong!
    }
  };
}

export default calculatePayslip;
