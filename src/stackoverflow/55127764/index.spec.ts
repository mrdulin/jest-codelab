import { connectDatabase } from './';

describe('test suites', () => {
  const config1 = { env: 'development' };
  const config2 = { env: 'test' };
  const config3 = { env: 'prod' };
  it.each`
    config     | name
    ${config1} | ${'Connect to Dev DB'}
    ${config2} | ${'Connect to Test DB'}
    ${config3} | ${'Connect to Prod DB'}
  `(`$name`, ({ config, name }) => {
    const consoleLogSpyOn = jest.spyOn(console, 'log');
    connectDatabase(config);
    expect(consoleLogSpyOn).toBeCalledWith(name);
  });
});
