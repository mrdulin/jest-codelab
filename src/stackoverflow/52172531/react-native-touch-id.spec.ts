import touchId from './react-native-touch-id';

jest.mock('./react-native-touch-id', () => {
  return {
    isSupported: jest.fn(() => Promise.resolve(true)),
    authenticate: jest.fn(() => Promise.resolve(true))
  };
});

describe('react-native-touch-id', () => {
  it('t1', () => {
    expect(touchId.isSupported()).toBeTruthy();
    expect(touchId.authenticate()).toBeTruthy();
  });

  it('t2', () => {
    (touchId.isSupported as jest.MockedFunction<typeof touchId.isSupported>).mockReturnValueOnce(false);
    (touchId.authenticate as jest.MockedFunction<typeof touchId.authenticate>).mockReturnValueOnce(false);
    expect(touchId.isSupported()).toBeFalsy();
    expect(touchId.authenticate()).toBeFalsy();
  });

  it('t3', () => {
    (touchId.isSupported as jest.MockedFunction<typeof touchId.isSupported>).mockReturnValueOnce(true);
    (touchId.authenticate as jest.MockedFunction<typeof touchId.authenticate>).mockReturnValueOnce(false);
    expect(touchId.isSupported()).toBeTruthy();
    expect(touchId.authenticate()).toBeFalsy();
  });
});
