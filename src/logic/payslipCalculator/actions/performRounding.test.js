//@flow

import handleRound from './performRounding';

describe('handleRounding', () => {
  it('should return 1 when input is 1.4', () => {
    expect(handleRound(1.4)).toEqual(1);
  });

  it('should return 2 when input is 1.6', () => {
    expect(handleRound(1.6)).toEqual(2);
  });

  it('should return 1 when input is 1.4999', () => {
    expect(handleRound(1.4999)).toEqual(1);
  });
});
