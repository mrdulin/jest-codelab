import { myFunc } from './';
import { outsideFunc } from './anotherFile';

jest.mock('./anotherFile.ts', () => ({
  outsideFunc: jest.fn()
}));

describe('Testing myFunc', () => {
  it('Should call outsideFunc', () => {
    myFunc();
    expect(jest.isMockFunction(outsideFunc)).toBeTruthy();
    expect(outsideFunc).toHaveBeenCalled();
  });
});
