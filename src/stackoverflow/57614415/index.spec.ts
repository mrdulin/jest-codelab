import { fetchAndUploadImageThunk } from './';
import UploadHandler from './UploadHandler';

jest.mock('./UploadHandler.ts', () => {
  const mUploadHandler = {
    uploadFile: jest.fn()
  };
  return jest.fn(() => mUploadHandler);
});

const uploadHandler = new UploadHandler({});

describe('fetchAndUploadImageThunk', () => {
  let mImageSelected;
  beforeEach(() => {
    mImageSelected = {
      get: jest.fn(name => {
        switch (name) {
          case 'title':
            return 'ebod666.mp4';
          case 'type':
            return 'mp4';
          case 'url':
            return 'https://github.com/mrdulin';
        }
      })
    };
  });
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });
  it('should upload file success', async () => {
    const id = 1;
    const thunk = fetchAndUploadImageThunk({ id, imageSelected: mImageSelected });
    const mBlob = new Blob();
    const mFile = new File([mBlob], 'ebod666.mp4');
    const mResponseBlob = jest.fn().mockResolvedValueOnce(mBlob);
    (global as any).fetch = jest.fn().mockResolvedValueOnce({ ok: true, blob: mResponseBlob } as any);
    (global as any).File = jest.fn().mockImplementation((...opts: any) => {
      return mFile;
    });

    await thunk();
    expect((global as any).fetch).toBeCalledWith('https://github.com/mrdulin', {
      mode: 'cors',
      credentials: 'include'
    });
    expect((global as any).File).toBeCalledWith([mBlob], 'ebod666.mp4', { type: 'mp4' });
    expect(uploadHandler.uploadFile).toBeCalledWith({ file: mFile, fileNewName: 'ebod666.mp4' });
  });

  it('should throw error when response is not ok', async () => {
    const id = 1;
    const thunk = fetchAndUploadImageThunk({ id, imageSelected: mImageSelected });
    (global as any).fetch = jest.fn().mockResolvedValueOnce({ ok: false } as any);
    await expect(thunk()).rejects.toThrowError('Error: fetch image error');
    expect((global as any).fetch).toBeCalledWith('https://github.com/mrdulin', {
      mode: 'cors',
      credentials: 'include'
    });
  });

  it('should throw error when fetch error', async () => {
    const id = 1;
    const thunk = fetchAndUploadImageThunk({ id, imageSelected: mImageSelected });
    (global as any).fetch = jest.fn().mockRejectedValueOnce(new Error('network error'));
    await expect(thunk()).rejects.toThrowError('network error');
    expect((global as any).fetch).toBeCalledWith('https://github.com/mrdulin', {
      mode: 'cors',
      credentials: 'include'
    });
  });
});
