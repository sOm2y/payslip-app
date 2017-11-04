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

function validateInput(input: Input): ValidationResults {
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
    .filter((result) => result.isInvalid)
    .forEach((result) => {
      errors = { ...errors, ...result.reasons };
    });

  return errors === noError ? { isInvalid: false } : { isInvalid: true, reasons: errors };
}

function calculatePayslip(input: Input): PayslipCalculationResult {
  const inputValidation = validateInput(input);
  if (inputValidation.isInvalid) return inputValidation;

  // const annualSalaryValidationResult = validateAnnualSalary({
  //   annualSalary: input.annualSalary
  // });

  // if (annualSalaryValidationResult.isInvalid) {
  //   return annualSalaryValidationResult;
  // }
  // gross income
  const grossIncome = divideAnnualSalaryBy12AndRound(incrementAfter50Rounding)({
    annualSalary: input.annualSalary
  });

  // super
  const superAmount = calculateSuper(incrementAfter50Rounding)({
    superRate: input.superRate,
    grossIncome
  });

  // income tax
  const incomeTax = calculateIncomeTax(incrementAfter50Rounding)({
    annualSalary: incrementAfter50Rounding(input.annualSalary)
  });

  // name
  const name = concatName({
    firstname: input.firstname,
    lastname: input.lastname
  });

  // TODO: pay period

  const netIncome = calculateNetIncome({
    grossIncome,
    incomeTax
  });

  return {
    isInvalid: false,
    value: {
      name: name,
      super: superAmount,
      grossIncome: grossIncome,
      incomeTax: incomeTax,
      netIncome
    }
  };
}

export default calculatePayslip;
