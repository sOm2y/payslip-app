//@flow

/**
 * a helper method to perform validate and run action
 */

function validateAndDo<TIn, TOut>(
  validator: TIn => ValidationResults,
  action: TIn => TOut
): (input: TIn) => Result<TOut> {
  return (input: TIn) => {
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
  };
}

export default validateAndDo;
