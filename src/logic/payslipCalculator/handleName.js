//@flow

/**
 * validate input
 * concat names
 */

function concatName(
  firstName: string,
  lastName: string,
  validateName: string => ValidationResult
): Result<string> {
  // FIXME: there's flow bug block us from using
  // filter -> map approach. it cannot find the Disjoin in Array.filter method.
  // https://github.com/facebook/flow/issues/5261
  const errors = [];
  [
    validateName(firstName),
    validateName(lastName)
  ].forEach((result) => {
    if (result.isInvalid) {
      errors.push(result.reason);
    }
  });

  // uncomment following when the issue is resolved
  // const errors=[
  //   validateName(firstName),
  //   validateName(lastName)
  // ]
  // .filter(result=>result.isInvalid)
  // .map(result=>result.reason);

  return errors.length === 0
    ? {
      isInvalid: false,
      value: `${firstName} ${lastName}`
    }
    : {
      isInvalid: true,
      reasons: errors
    };
}

export default concatName;
