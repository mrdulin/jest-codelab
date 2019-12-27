const getAnswers = require('./getAnswers');
const inquirer = require('inquirer');

jest.mock('inquirer', () => {
  return { prompt: jest.fn() };
});

describe('59495121', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should pass', async () => {
    inquirer.prompt.mockResolvedValueOnce('Correct Answer');
    const actual = await getAnswers('abc');
    expect(actual).toBe('Correct Answer');
  });
});
