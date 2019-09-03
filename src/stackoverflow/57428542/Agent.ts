interface DialogFlowPayload {}
interface WebhookClient {}
interface Chatter {
  getMessage(): any;
}
class Agent {
  private payload: DialogFlowPayload[] = [];

  constructor(readonly webhookClient: WebhookClient, private readonly chatter: Chatter) {}

  public getParameter() {
    return 'real data';
  }

  public otherMethod() {
    return 'other real data';
  }
}

export { Agent, Chatter };
