//@flow

function performValidation(
  validate: any => ValidationResult,
  input: { [key: string]: any }
): ValidationResults {
  const noError = {};
  let errors = noError;

  Object.keys(input).forEach((key) => {
    const result = validate(input[key]);
    if (result.isInvalid) {
      errors = { ...errors, [key]: result.reason };
    }
  });

  return errors === noError
    ? {
      isInvalid: false
    }
    : {
      isInvalid: true,
      reasons: errors
    };
}

export default performValidation;
