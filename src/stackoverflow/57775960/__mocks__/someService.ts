const mockedSomeService = {
  saveNewElement: jest.fn().mockResolvedValue('mocked data')
};
const SomeService = jest.fn(() => mockedSomeService);

export { SomeService, mockedSomeService };
