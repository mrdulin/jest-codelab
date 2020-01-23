import { DsBreadcrumb } from './';

describe('59867716', () => {
  describe('#getAttributes', () => {
    it('should pass', () => {
      const breadcrumb = new DsBreadcrumb();
      const mEvent = { attributes: { a: { name: 'a name', value: 'a value' } } };
      const actual = breadcrumb.getAttributes(mEvent);
      expect(actual).toEqual({ 'a name': 'a value' });
    });
  });
});
