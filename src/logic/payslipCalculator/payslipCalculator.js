//@flow

/**
 * entry point of the calculator
 */

import validateName from './validators/validateName';
import concatName from './actions/concatName';
import validateAnnualSalary from './validators/validateAnnualSalary';
import divideAnnualSalaryBy12AndRound from './actions/divideAnnualSalaryBy12AndRound';
import { incrementAfter50Rounding } from './actions/performRounding';
import calculateIncomeTax from './actions/calculateIncomeTax';
import calculateSuper from './actions/calculateSuper';
import validateSuperRate from './validators/validateSuperRate';
import calculateNetIncome from './actions/calculateNetIncome';
import { default as perform } from './core/validateAndDo';

function calculatePayslip(input: Input): PayslipCalculationResult {
  // singleton annual salary validaton
  const annualSalaryValidationResult = validateAnnualSalary({
    annualSalary: input.annualSalary
  });

  if (annualSalaryValidationResult.isInvalid) {
    return annualSalaryValidationResult;
  }
  // gross income
  const grossIncome = perform(
    () => annualSalaryValidationResult,
    divideAnnualSalaryBy12AndRound(incrementAfter50Rounding)
  )({
    annualSalary: input.annualSalary
  });

  if (grossIncome.isInvalid) return grossIncome;

  // super
  const superAmount = perform(
    validateSuperRate,
    calculateSuper(incrementAfter50Rounding)
  )({
    superRate: input.superRate,
    grossIncome: grossIncome.value
  });

  if (superAmount.isInvalid) return superAmount;

  // income tax
  const incomeTax = perform(
    () => annualSalaryValidationResult,
    calculateIncomeTax(incrementAfter50Rounding)
  )({
    annualSalary: incrementAfter50Rounding(input.annualSalary)
  });

  if (incomeTax.isInvalid) return incomeTax;

  // name
  const name = perform(validateName, concatName)({
    firstname: input.firstname,
    lastname: input.lastname
  });

  if (name.isInvalid) return name;

  // TODO: pay period

  const netIncome = calculateNetIncome({
    grossIncome: grossIncome.value,
    incomeTax: incomeTax.value
  });

  return {
    isInvalid: false,
    value: {
      name: name.value,
      super: superAmount.value,
      grossIncome: grossIncome.value,
      incomeTax: incomeTax.value,
      netIncome
    }
  };
}
