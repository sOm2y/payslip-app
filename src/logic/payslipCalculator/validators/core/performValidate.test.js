//@flow

import performValidate from './performValidate';

describe('performValidate', () => {
  it('should product an object of property names and errors, when validation fails', () => {
    const input = { foo: 'bar' };

    const reason = 'all wrong';
    const validator = () => ({ isInvalid: true, reason });

    const result = performValidate(validator, input);

    expect(result.isInvalid).toBe(true);
    expect(result.reasons).toEqual({
      foo: reason
    });
  });

  it('should return truly result, when validtion success', () => {
    const input = { foo: 'bar' };
    const validator = () => ({ isInvalid: false });

    const result = performValidate(validator, input);
    expect(result.isInvalid).toBe(false);
  });
});
