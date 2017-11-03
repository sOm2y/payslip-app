import handleName from './handleName';
import {
  INPUT_NO_EMPTY,
  INPUT_NO_NULL,
  INPUT_NO_UNDEFINED
} from './validatorMessage';
describe('handleName', () => {
  it('should concat firstname and lastname with a space in between', () => {
    const firstname = 'foo';
    const lastname = 'bar';

    expect(handleName(firstname, lastname)).toBe(
      `${firstname} ${lastname}`
    );
  });

  it('should thorw exception when firstname is null', () => {
    const firstname = null;
    const lastname = 'bar';
    expect(handleName(firstname, lastname)).toThrow(INPUT_NO_NULL);
  });

  it('should throw exception when firstname is undefined', () => {
    const firstname = undefined;
    const lastname = 'bar';
    expect(handleName(firstname, lastname)).toThrow(
      INPUT_NO_UNDEFINED
    );
  });

  it('should throw exception when firstname is 0 length', () => {
    const firstname = '';
    const lastname = 'bar';
    expect(handleName(firstname, lastname)).toThrow(INPUT_NO_EMPTY);
  });

  it('should throw exception when lastname is undefined', () => {
    const firstname = 'foo';
    const lastname = undefined;
    expect(handleName(firstname, lastname)).toThrow(
      INPUT_NO_UNDEFINED
    );
  });

  it('should thorw exception when lastname is null', () => {
    const firstname = 'foo';
    const lastname = null;
    expect(handleName(firstname, lastname)).toThrow(INPUT_NO_NULL);
  });

  it('should thorw exception when lastname is 0 length', () => {
    const firstname = 'foo';
    const lastname = '';
    expect(handleName(firstname, lastname)).toThrow(INPUT_NO_EMPTY);
  });
});
