//@flow

/**
 * shoud return false when input is empty/null/undefined
 */

function rejectEmptyNullUndefined(input: string) {
  return rejectEmpty(input);
}

function rejectUndefined(input: string) {
  return typeof input === 'undefined' ? true : false;
}

function rejectNull(input: string) {
  return input === null ? true : false;
}

function rejectEmpty(input: string) {
  return rejectUndefined(input) || rejectNull(input) || typeof input !== 'string' || input.length === 0;
}

export { rejectEmptyNullUndefined };
