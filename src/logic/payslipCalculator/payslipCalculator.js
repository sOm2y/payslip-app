//@flow

/**
 * entry point of the calculator
 */
import validateInput from './validateInput';

function calculatePayslip(input: Input): PayslipCalculationResult {
  const validationResult = validateInput(input);
}
