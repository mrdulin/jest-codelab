import { status } from './ajax';
import axios from 'axios';

axios.get = jest.fn();

describe('ajax', () => {
  let urls;

  beforeEach(() => {
    urls = {
      loginUrl: '/',
      logoutUrl: '/'
    };
  });

  afterEach(() => {
    axios.get = jest.requireActual('axios').get;
  });

  it('calls status with a login and logout url', async () => {
    const { loginUrl, logoutUrl } = urls;
    (axios as jest.Mocked<typeof axios>).get.mockResolvedValueOnce('mocked data');
    const actualValue = await status(urls);
    expect(actualValue).toBe('mocked data');
    expect(axios.get).toBeCalledWith(`/auth?login=${loginUrl}&logout=${logoutUrl}`);
  });

  it.skip('should restore original get', () => {
    expect(jest.isMockFunction(axios.get)).toBeFalsy();
  });
});
