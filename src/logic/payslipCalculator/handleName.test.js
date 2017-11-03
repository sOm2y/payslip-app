import handleName from './handleName';
describe('handleName', () => {
  it('should concat firstname and lastname with a space in between', () => {
    const firstname = 'foo';
    const lastname = 'bar';
    const validator = () => ({ isInvalid: false });

    const result = handleName(firstname, lastname, validator);

    expect(result.isInvalid).toBe(false);
    expect(result.value).toBe(`${firstname} ${lastname}`);
  });

  it('should return falsy reason from validator when validation fails', () => {
    const reason = 'something goes wrong!';
    const validtor = () => ({
      isInvalid: true,
      reason
    });

    const result = handleName('foo', 'bar', validtor);

    expect(result.isInvalid).toBe(true);
    expect(result.reasons).toEqual([reason, reason]);
  });
});
