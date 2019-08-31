import { A } from './a';

describe('A', () => {
  describe('checkTesting', () => {
    it('should initiate the constructor', () => {
      jest.spyOn(A, 'checkTesting').mockReturnValue({ name: 'never mind' });
      const param = 'one';
      const a = new A(param);
      expect(a).toBeInstanceOf(A);
      expect(A.checkTesting).toBeCalledWith(param);
    });
  });
});
