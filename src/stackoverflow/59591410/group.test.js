import Group from './group';
import apiService from './apiservice';

describe('59591410', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('should get all groups correctly', async () => {
    jest.spyOn(apiService, 'getAllGroups').mockResolvedValueOnce([1, 2]);
    const group = new Group();
    await group.getAllGroups();
    expect(group.groups).toEqual([1, 2]);
  });

  it('should handle error', async () => {
    const error = { response: { data: { message: 'some error' } } };
    jest.spyOn(apiService, 'getAllGroups').mockRejectedValueOnce(error);
    jest.spyOn(console, 'log');
    const group = new Group();
    await group.getAllGroups();
    expect(console.log).toBeCalledWith('some error');
  });
});
