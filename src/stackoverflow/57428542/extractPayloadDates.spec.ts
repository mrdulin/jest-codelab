import { extractPayloadDates } from './extractPayloadDates';
import { Agent } from './Agent';

const agent = new Agent();

describe('extractPayloadDates', () => {
  it('should only mock getParameter method of agent', () => {
    agent.getParameter = jest.fn().mockReturnValueOnce('mocked data');
    const actualValue = extractPayloadDates(agent);
    expect(actualValue).toEqual('mocked data');
    expect(agent.otherMethod()).toBe('other real data');
  });
});
