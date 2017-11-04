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

import { default as perform } from './core/validateAndDo';

function calculatePayslip(input: Input): PayslipCalculationResult {
  const name = perform(validateName, concatName)({
    firstname: input.firstname,
    lastname: input.lastname
  });

  const annualSalaryValidationResult = validateAnnualSalary({
    annualSalary: input.annualSalary
  });

  const grossIncome = perform(
    () => annualSalaryValidationResult,
    divideAnnualSalaryBy12AndRound(incrementAfter50Rounding)
  )({
    annualSalary: input.annualSalary
  });

  const incomeTax = perform(
    () => annualSalaryValidationResult,
    calculateIncomeTax(incrementAfter50Rounding)
  )({
    annualSalary: incrementAfter50Rounding(input.annualSalary)
  });
}
