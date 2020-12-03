import devices from './deivce';

describe('65112057', () => {
  test('Resolves with valid audio mediaStream', async () => {
    const mockMediaDevices = {
      getUserMedia: jest.fn().mockResolvedValueOnce('fake data' as any),
    };
    Object.defineProperty(window.navigator, 'mediaDevices', {
      writable: true,
      value: mockMediaDevices,
    });
    const actual = await devices.connectAudioDevice();
    expect(actual).toBe('fake data');
    expect(mockMediaDevices.getUserMedia).toBeCalledWith({ audio: true });
  });
});
