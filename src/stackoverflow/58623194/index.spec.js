const { lambdaService } = require('.');
const dataService = require('./dataService');

describe('lambdaService', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });
  test('should return data', async () => {
    const mResponse = { code: 200, data: 'mocked data' };
    const mEvent = { id: 1 };
    const retrieveDataSpy = jest.spyOn(dataService, 'retrieveData').mockResolvedValueOnce(mResponse);
    const actualValue = await lambdaService(mEvent);
    expect(actualValue).toEqual(mResponse);
    expect(retrieveDataSpy).toBeCalledWith(mEvent.id);
  });

  test('should return error message', async () => {
    const mResponse = { code: 500, message: 'Internal server error' };
    const mEvent = { id: 1 };
    const retrieveDataSpy = jest.spyOn(dataService, 'retrieveData').mockResolvedValueOnce(mResponse);
    const actualValue = await lambdaService(mEvent);
    expect(actualValue).toEqual({ statusCode: 500, body: JSON.stringify({ message: mResponse.message }) });
    expect(retrieveDataSpy).toBeCalledWith(mEvent.id);
  });

  test('should throw an error', async () => {
    const mEvent = { id: 1 };
    const retrieveDataSpy = jest.spyOn(dataService, 'retrieveData').mockRejectedValueOnce(new Error('network error'));
    await expect(lambdaService(mEvent)).rejects.toThrowError(new Error('network error'));
    expect(retrieveDataSpy).toBeCalledWith(mEvent.id);
  });
});
