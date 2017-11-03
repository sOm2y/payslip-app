//@flow

/**
 * a helper method to perform validate and run action
 */

function validateAndDo<TIn, TOut>(
  validator: TIn => ValidationResult,
  action: TIn => TOut,
  input: TIn
): Result<TOut> {
  const validateResult = validator(input);

  return validateResult.isInvalid
    ? {
      isInvalid: true,
      reasons: validateResult.reasons
    }
    : {
      isInvalid: false,
      value: action(input)
    };
}

export default validateAndDo;
