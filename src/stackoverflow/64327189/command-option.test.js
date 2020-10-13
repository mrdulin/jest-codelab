const CommandOption = require('./command-option');

describe('64327189', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should equal "hardware", "get", and "byid"', () => {
    let commandOption = new CommandOption(['hardware', 'get', 'byid']);
    expect(commandOption.section).toBe('hardware');
    expect(commandOption.method).toBe('get');
    expect(commandOption.command1).toBe('byid');
  });

  it('should load option by name', () => {
    const optionSetter = jest.fn();
    jest.doMock('./commands/options/host', () => optionSetter);
    let commandOption = new CommandOption(['hardware', 'get', 'byid']);
    const optionName = 'host';
    commandOption.option(optionName);
    expect(optionSetter).toBeCalledWith(commandOption);
  });
});
