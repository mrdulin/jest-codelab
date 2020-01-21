import file from './file';
import api from './api';
import { namedExport } from './nodeModule';

jest.mock('./nodeModule', () => {
  const mNamedExport = {
    logout: jest.fn(),
  };
  return { namedExport: mNamedExport };
});

jest.mock('./api', () => {
  return { makeCall: jest.fn() };
});

describe('59831697', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should handle error if http status equal 403', async () => {
    const mError = { status: 403 };
    api.makeCall.mockRejectedValueOnce(mError);
    await file.apiCall();
    expect(namedExport.logout).toHaveBeenCalledTimes(1);
  });
});
