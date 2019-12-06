import { SomeClass } from './';
import ModelUtility from './ModelUtility';

describe('SomeClass', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('should return invalid query parameters', async () => {
    const buildSearchParameterSpy = jest
      .spyOn(ModelUtility, 'buildSearchParameter')
      .mockReturnValueOnce('mocked search parameter');
    const isUnknownFieldsSpy = jest.spyOn(ModelUtility, 'isUnknownFields').mockReturnValueOnce(true);

    const instance = new SomeClass();
    const actual = await instance.search('mocked query', 'endpointConstants');
    expect(actual).toBe('invalid');
    expect(buildSearchParameterSpy).toBeCalledWith('mocked query', 'endpointConstants', undefined);
    expect(isUnknownFieldsSpy).toBeCalledWith('SEARCH', 'mocked search parameter', undefined);
  });

  it('should return correctly', async () => {
    const buildSearchParameterSpy = jest
      .spyOn(ModelUtility, 'buildSearchParameter')
      .mockReturnValueOnce('mocked search parameter');
    const isUnknownFieldsSpy = jest.spyOn(ModelUtility, 'isUnknownFields').mockReturnValueOnce(false);

    const instance = new SomeClass();
    jest.spyOn(instance, 'readAll').mockReturnValueOnce('mocked data');
    const actual = await instance.search('mocked query', 'endpointConstants');
    expect(actual).toBe('mocked data');
    expect(buildSearchParameterSpy).toBeCalledWith('mocked query', 'endpointConstants', undefined);
    expect(isUnknownFieldsSpy).toBeCalledWith('SEARCH', 'mocked search parameter', undefined);
  });
});
