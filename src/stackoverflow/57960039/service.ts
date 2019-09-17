// tslint:disable-next-line: interface-name
export interface ClientProxy {
  send(pattern: string, simulation: any): any;
  connect(): any;
  close(): any;
  routingMap(): any;
}

export class SimulationsService {
  constructor(private simulationClient: ClientProxy) {}

  public method1() {
    const simulation = {};
    this.simulationClient.send('simulatePattern', simulation);
  }
}
