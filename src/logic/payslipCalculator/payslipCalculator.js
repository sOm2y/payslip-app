//@flow

/**
 * entry point of the calculator
 */

import validateName from './validators/validateName';
import concatName from './actions/concatName';
import validateGrossIncome from './validators/validateGrossIncome';
import divideAnnualSalaryBy12AndRound from './actions/divideAnnualSalaryBy12AndRound';
import { incrementAfter50 as incrementAfter50Rounding } from './actions/performRounding';

import { default as perform } from './core/validateAndDo';

function calculatePayslip(input: Input): PayslipCalculationResult {
  const name = perform(validateName, concatName)({
    firstname: input.firstname,
    lastname: input.lastname
  });

  const grossIncome = perform(
    validateGrossIncome,
    divideAnnualSalaryBy12AndRound(incrementAfter50Rounding)
  )({
    annualSalary: input.annualSalary
  });
}
