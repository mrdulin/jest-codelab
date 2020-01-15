import { main } from './main';
import Busboy from 'busboy';

jest.mock('busboy', () => {
  const mBusboy = {
    on: jest.fn(),
  };
  return jest.fn(() => mBusboy);
});

describe('59731700', () => {
  let busboy;
  beforeEach(() => {
    busboy = new Busboy({});
  });
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  it('should pass', () => {
    const mockedEvenMap = {};
    busboy.on.mockImplementation((event, callback) => {
      mockedEvenMap[event] = callback;
    });
    const logSpy = jest.spyOn(console, 'log');
    main();
    mockedEvenMap['file']('a', 'b', 'c', 'd', 'e');
    expect(logSpy).toBeCalledTimes(1);
  });
});
