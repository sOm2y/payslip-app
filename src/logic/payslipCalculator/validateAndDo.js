//@flow

/**
 * a helper method to perform validate and run action
 * 
 */

function validateAndDo<TIn, TOut>(
  validator: TIn => ValidationResult,
  action: TIn => TOut
): Result<TOut> {}

export default validateAndDo;
