jest.mock('./loadDataFromLocalStorage.ts');
import { someModule } from '.';

describe('someModule', () => {
  it('t1', () => {
    expect.assertions(1);
    const actualValue = someModule.myFunc();
    expect(actualValue).toBeTruthy();
  });
});
