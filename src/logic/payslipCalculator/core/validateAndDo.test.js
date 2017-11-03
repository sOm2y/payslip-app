//@flow

import perform from './validateAndDo';

describe('handleName', () => {
  it('should response valid result', () => {
    const response = {};
    const getResponse = () => response;

    const alwaysValid = () => ({ isInvalid: false });

    const result = perform(alwaysValid, getResponse)();

    expect(result.isInvalid).toBe(false);
    expect(result.value).toBe(response);
  });

  it('should response inValid result', () => {
    const response = {};
    const getResponse = () => response;

    // because we expect a result of [property]:reason
    const reason = { foo: 'something goes wrong!' };
    const alwaysInvalid = () => ({
      isInvalid: true,
      reasons: reason
    });

    const result = perform(alwaysInvalid, getResponse)({
      foo: 'bar'
    });
    expect(result.isInvalid).toBe(true);
    expect(result.reasons).toEqual(reason);
  });
});
