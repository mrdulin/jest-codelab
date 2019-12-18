import { handle, transformFuncMap, TransformationType } from './';

describe('59383743', () => {
  it('should pass', async () => {
    transformFuncMap[TransformationType.UNZIP] = jest.fn();
    transformFuncMap[TransformationType.NOOP] = jest.fn();
    const funcKeys: TransformationType[] = [TransformationType.NOOP, TransformationType.UNZIP];
    await handle(funcKeys);
    expect(transformFuncMap[TransformationType.UNZIP]).toBeCalledWith({});
    expect(transformFuncMap[TransformationType.NOOP]).toBeCalledWith({});
  });
});
