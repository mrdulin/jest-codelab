import { main } from './';
import { NativeModules } from './react-native';

jest.mock('./react-native', () => {
  return {
    NativeModules: {
      MyCustomNativeModule: {
        dismiss: jest.fn()
      }
    }
  };
});

describe('main', () => {
  it('should mock react-native correctly', () => {
    const mockedData = 'mocked data';
    (NativeModules.MyCustomNativeModule.dismiss as jest.MockedFunction<
      typeof NativeModules.MyCustomNativeModule.dismiss
    >).mockReturnValueOnce(mockedData);

    const actualValue = main();
    expect(actualValue).toBe(mockedData);
    expect(NativeModules.MyCustomNativeModule.dismiss).toBeCalledTimes(1);
  });
});
