//@flow

import { incrementAfter50Rounding } from './performRounding';

describe('handleRounding', () => {
  describe('incrementAfter50', () => {
    it('should return 1 when input is 1.4', () => {
      expect(incrementAfter50Rounding(1.4)).toEqual(1);
    });

    it('should return 2 when input is 1.6', () => {
      expect(incrementAfter50Rounding(1.6)).toEqual(2);
    });

    it('should return 1 when input is 1.4999', () => {
      expect(incrementAfter50Rounding(1.4999)).toEqual(1);
    });
  });
});
