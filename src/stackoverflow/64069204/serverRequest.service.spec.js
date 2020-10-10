import { get } from 'axios';
import { serverRequest } from './serverRequest.service';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('server request get', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should pass', async () => {
    const data = { data: {} };
    get.mockResolvedValue(data);

    const result = await serverRequest.get('http://server', null);
    expect(get).toHaveBeenCalledWith('http://server', null);
    expect(result).toEqual(data);
  });
});
