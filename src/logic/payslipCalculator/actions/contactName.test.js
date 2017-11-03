//@flow
import concatName from './concatName';

describe('concatName', () => {
  it('should concat firstname and lastname', () => {
    const firstname = 'foo';
    const lastname = 'bar';

    expect(concatName({ firstname, lastname })).toEqual(
      `${firstname} ${lastname}`
    );
  });
});
