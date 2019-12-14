import { SomeClass } from './';

describe('SomeClass', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('should pass - 1', () => {
    const instance = new SomeClass();
    jest.spyOn(instance, 'getFloorVar');
    jest.spyOn(instance, 'updateZoom');
    instance.zoomOut();
    expect(instance.getFloorVar).toBeCalledTimes(1);
    expect(instance.updateZoom).toBeCalledWith(1);
  });

  it('should pass - 2', () => {
    const instance = new SomeClass();
    jest.spyOn(instance, 'getFloorVar').mockReturnValueOnce(22);
    jest.spyOn(instance, 'updateZoom');
    instance.zoomOut();
    expect(instance.getFloorVar).toBeCalledTimes(1);
    expect(instance.updateZoom).toBeCalledWith(22);
  });

  it('should pass - 3', () => {
    const instance = new SomeClass();
    instance.INCREMENT = 0;
    jest.spyOn(instance, 'getFloorVar');
    jest.spyOn(instance, 'updateZoom');
    instance.zoomOut();
    expect(instance.getFloorVar).toBeCalledTimes(1);
    expect(instance.updateZoom).toBeCalledWith(2);
  });
});
