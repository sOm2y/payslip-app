//@flow

/**
 * entry point of the calculator
 */

import handleName from './handleName';
import { validateName } from './validator';

function calculatePayslip(input: Input): PayslipCalculationResult {
  const name = handleName(
    input.firstName,
    input.lastName,
    validateName
  );
}
