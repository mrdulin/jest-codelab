import axios from 'axios';
import { getRequest, FETCH_DATA, ERROR_DATA } from './';

describe('getRequest', () => {
  const dispatch = jest.fn();
  it('should get data and dispatch action correctly', async () => {
    const axiosGetSpyOn = jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: 'mocked data' });
    await getRequest('jest')(dispatch);
    expect(axiosGetSpyOn).toBeCalledWith('jest');
    expect(dispatch).toBeCalledWith({ type: FETCH_DATA, payload: 'mocked data' });
    axiosGetSpyOn.mockRestore();
  });

  it('should dispatch error', async () => {
    const error = {
      response: {
        status: 400,
        statusText: 'client error'
      }
    };
    const axiosGetSpyOn = jest.spyOn(axios, 'get').mockRejectedValueOnce(error);
    await getRequest('ts')(dispatch);
    expect(axiosGetSpyOn).toBeCalledWith('ts');
    expect(dispatch).toBeCalledWith({ type: ERROR_DATA, payload: error.response });
    axiosGetSpyOn.mockRestore();
  });
});
