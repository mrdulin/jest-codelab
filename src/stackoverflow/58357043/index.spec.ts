import getAreas from './';
import axios from 'axios';

jest.mock('axios');

afterEach(() => {
  jest.clearAllMocks();
});

describe('getAreas', () => {
  it('fetches results from api', () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({ results: [] });
    getAreas('atl').then(response => {
      expect(response).toEqual({ results: [] });
    });
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/test/areas/atl');
  });
});
