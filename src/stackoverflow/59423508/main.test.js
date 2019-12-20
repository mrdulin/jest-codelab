import { main } from './main';

describe('59423508', () => {
  it('should pass', () => {
    const mElement = {};
    document.querySelector = jest.fn().mockReturnValueOnce(mElement);
    const actual = main();
    expect(actual).toEqual(mElement);
    expect(document.querySelector).toBeCalledWith('#selectbox');
  });
});
