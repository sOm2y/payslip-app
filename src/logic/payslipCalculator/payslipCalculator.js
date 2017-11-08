//@flow

/**
 * entry point of the calculator
 */

import validateInput from './validateInput';
import calculatePayslip from './calculatePayslip';
/**
 * the entry point
 */
function generatePayslip(
  validateInput: PayslipInput => ValidationResults,
  calculatePayslip: PayslipInput => PayslipCalculationResult
): PayslipInput => PayslipCalculationResult {
  return (input: PayslipInput) => {
    const inputValidation = validateInput(input);
    if (inputValidation.isInvalid) return inputValidation;

    return calculatePayslip(input);
  };
}

export default generatePayslip(validateInput, calculatePayslip);
