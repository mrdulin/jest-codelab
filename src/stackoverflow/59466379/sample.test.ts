import { Sample } from './sample';

describe('59466379', () => {
  it('should pass', () => {
    // @ts-ignore
    const update1 = jest.spyOn(Sample.prototype, 'update1');
    // @ts-ignore
    const update2 = jest.spyOn(Sample.prototype, 'update2');
    const instance = new Sample();
    instance.update();
    expect(update1).toBeCalledTimes(1);
    expect(update2).toBeCalledTimes(1);
    update1.mockRestore();
    update2.mockRestore();
  });
});
