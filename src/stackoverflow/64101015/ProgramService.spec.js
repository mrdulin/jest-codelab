import { ProgramService } from './ProgramService';
import { SubsciberProgram } from './SubsciberProgram';

jest.mock('./SubsciberProgram', () => {
  const mSubsciberProgram = { findBySubscriberId: jest.fn(), create: jest.fn() };
  return { SubsciberProgram: jest.fn(() => mSubsciberProgram) };
});

describe('64101015', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should pass', async () => {
    const subsciberProgram = new SubsciberProgram();
    subsciberProgram.findBySubscriberId.mockResolvedValueOnce([]);
    subsciberProgram.create.mockResolvedValueOnce('success');
    const programService = new ProgramService();
    const serviceRecord = { userId: 1, programId: 2 };
    const actual = await programService.subscribeUser(serviceRecord);
    expect(actual).toEqual('success');
    expect(subsciberProgram.findBySubscriberId).toBeCalledWith(1, 2);
    expect(subsciberProgram.create).toBeCalledWith(1, 2);
  });
});
