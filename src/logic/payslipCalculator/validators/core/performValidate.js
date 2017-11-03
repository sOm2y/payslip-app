//@flow

type Validator = any =>
  | { isInvalid: true, reason: string }
  | { isInvalid: false };

function performValidation(
  validator: Validator,
  input: { [key: string]: any }
): ValidationResult {
  const errors = {};

  Object.keys(input).forEach((key) => {
    const result = validator(input[key]);
    if (result.isInvalid) {
      errors[key] = result.reason;
    }
  });

  return Object.keys(errors).length === 0
    ? {
      isInvalid: false
    }
    : {
      isInvalid: true,
      reasons: errors
    };
}

export default performValidation;
