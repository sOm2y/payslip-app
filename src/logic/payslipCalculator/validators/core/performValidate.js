//@flow

function performValidation(
  validate: any => ValidationResult,
  input: { [key: string]: any }
): ValidationResults {
  const errors = {};

  Object.keys(input).forEach((key) => {
    const result = validate(input[key]);
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
