//@flow

import { incrementAfter50Rounding } from './actions/performRounding';

import concatName from './actions/concatName';
import divideAnnualSalaryBy12AndRound from './actions/divideAnnualSalaryBy12AndRound';
import calculateIncomeTax from './actions/calculateIncomeTax';
import calculateSuper from './actions/calculateSuper';
import calculateNetIncome from './actions/calculateNetIncome';
import mapPayPeriod from './actions/mapPayPeriod';
/**
 * calculate the payslip
 */
function calculatePayslip(input: PayslipInput): PayslipCalculationResult {
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

  const payPeriod = mapPayPeriod({ paymentStartDate: input.paymentStartDate });

  return {
    isInvalid: false,
    value: {
      name,
      super: superAmount,
      grossIncome,
      incomeTax,
      netIncome,
      payPeriod
    }
  };
}

export default calculatePayslip;
