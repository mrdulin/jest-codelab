import axios from 'axios';
import { main } from './';

describe('main', () => {
  it.skip('success', async () => {
    const spyOn = jest.spyOn(console, 'log');
    (axios as jest.Mocked<typeof axios>).get.mockResolvedValueOnce('success data');
    await main();
    expect(spyOn).toBeCalledWith('success data');
    spyOn.mockRestore();
  });

  it.skip('error', async () => {
    const spyOn = jest.spyOn(console, 'log');
    (axios as jest.Mocked<typeof axios>).get.mockRejectedValueOnce(new Error('some error'));
    await main();
    expect(spyOn).toBeCalledWith(new Error('some error'));
    spyOn.mockRestore();
  });
});
