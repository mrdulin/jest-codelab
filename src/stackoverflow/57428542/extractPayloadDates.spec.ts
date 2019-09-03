import { extractPayloadDates } from './extractPayloadDates';
import { Agent, Chatter } from './Agent';

const webhookMock = jest.fn();
const chatter: jest.Mocked<Chatter> = {
  getMessage: jest.fn()
};

const agent = new Agent(webhookMock, chatter);

describe('extractPayloadDates', () => {
  it('should only mock getParameter method of agent', () => {
    agent.getParameter = jest.fn().mockReturnValueOnce('mocked data');
    const actualValue = extractPayloadDates(agent);
    expect(actualValue).toEqual('mocked data');
    expect(agent.otherMethod()).toBe('other real data');
  });
});
