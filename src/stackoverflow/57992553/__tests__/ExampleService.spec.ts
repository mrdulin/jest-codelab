import ExampleService from '../ExampleService';
import axios, { AxiosResponse } from 'axios';

jest.mock('axios', () => {
  return {
    create: jest.fn().mockReturnThis(),
    get: jest.fn()
  };
});

const exampleService = new ExampleService();

describe('ExampleService', () => {
  beforeEach(() => {
    (axios.create().get as jest.MockedFunction<typeof axios.get>).mockReset();
  });

  describe('#getApprovals', () => {
    const mockedResponse: AxiosResponse = {
      data: 'mocked data',
      status: 200,
      statusText: 'ok',
      headers: {},
      config: {}
    };
    it('should get approvals by id correctly', async () => {
      (axios.create().get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce(mockedResponse);
      const actualValue = await exampleService.getApprovals('1');
      expect(actualValue).toEqual(mockedResponse.data);
      expect(axios.create().get).toBeCalledWith(`/api/approval/1`);
    });

    it('should get approvals correctly', async () => {
      (axios.create().get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce(mockedResponse);
      const actualValue = await exampleService.getApprovals();
      expect(actualValue).toEqual(mockedResponse.data);
      expect(axios.create().get).toBeCalledWith(`/api/approval`);
    });
  });
});
