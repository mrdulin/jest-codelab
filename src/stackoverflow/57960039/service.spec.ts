import { SimulationsService, ClientProxy } from './service';
import { mock } from '../../__utils';

const simulationClientMock = mock<ClientProxy>('send');

// Argument of type '{ send: Mock<any, any>; }' is not assignable to parameter of type 'ClientProxy'.
// Type '{ send: Mock<any, any>; }' is missing the following properties from type 'ClientProxy': connect, close, routingMap
// const simulationClientMock = {
//   send: jest.fn()
// };

const service = new SimulationsService(simulationClientMock);

describe('SimulationsService', () => {
  describe('#method1', () => {
    it('t1', () => {
      simulationClientMock.send.mockReturnValueOnce('mocked data');
      service.method1();
      expect(simulationClientMock.send).toBeCalledWith('simulatePattern', {});
    });
  });
});
