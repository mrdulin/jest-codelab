import readFileAsync from './';

const mFileReader = jest.fn(() => {
  return {
    readAsDataURL: jest.fn(),
    readAsArrayBuffer: jest.fn(),
  };
});

(global as any).FileReader = mFileReader;

describe('59581721', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('should read as data url correctly', async () => {
    const blob = new Blob(['a']);
    const pending = readFileAsync(blob, true);
    const mReader = (readFileAsync as any)._reader;
    mReader.result = 'mocked result';
    mReader.onload();
    const actual = await pending;
    expect(actual).toBe('mocked result');
    expect(mReader.readAsDataURL).toBeCalledWith(blob);
  });

  it('should read as array buffer corectly', async () => {
    const blob = new Blob(['a']);
    const pending = readFileAsync(blob);
    const mReader = (readFileAsync as any)._reader;
    mReader.result = 'mocked result';
    mReader.onload();
    const actual = await pending;
    expect(actual).toBe('mocked result');
    expect(mReader.readAsArrayBuffer).toBeCalledWith(blob);
  });
});
