import { obj } from './';
import { socket } from './socket';

describe('obj', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('should emit event and execute callback correctly', () => {
    const emitSpy = jest.spyOn(socket, 'emit');
    obj.someMethod();
    expect(emitSpy).toBeCalledWith('ferret', 'tobi', obj.handleFerret);
  });

  it('should handle ferret correctly', () => {
    const sumSpy = jest.spyOn(obj, 'sum');
    obj.handleFerret(2);
    expect(sumSpy).toBeCalledWith(5, 2);
  });
});
