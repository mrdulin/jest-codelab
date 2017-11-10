import { postRequestWithoutHeader } from './postRequests';
import fetch from 'node-fetch';

const { Response } = jest.requireActual('node-fetch');

jest.mock('./checkNetwork.ts');
jest.mock('node-fetch');

describe('postRequestWithoutHeader', () => {
  const mockedData = { data: 'mocked data' };
  const mockedJSONData = JSON.stringify(mockedData);
  const urlRoute = 'https://github.com/mrdulin';
  const body = {};

  it('should post request without header correctly', async () => {
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(new Response(mockedJSONData));
    const actualValue = await postRequestWithoutHeader(urlRoute, body);
    expect(actualValue).toEqual(mockedData);
    expect(fetch).toBeCalledWith(urlRoute, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    });
  });

  it('should post request error', async () => {
    const mockedResponse = new Response(mockedJSONData, { status: 400 });
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(mockedResponse);
    await expect(postRequestWithoutHeader(urlRoute, body)).rejects.toEqual(mockedData);
    expect(fetch).toBeCalledWith(urlRoute, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    });
  });
});
