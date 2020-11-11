const http = require('http');
const app = require('./app');

describe('64768906', () => {
  afterEach(() => {
    jest.resetModules();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('should create server with my express instance and  listen from port 3000', () => {
    const server = { listen: jest.fn() };
    const createServerSpy = jest.spyOn(http, 'createServer').mockReturnValue(server);
    require('./www');
    expect(createServerSpy).toBeCalledWith(app);
    expect(server.listen).toBeCalledWith(3000);
  });
  it("should listen from port that is provided from environment variable if it's given.", () => {
    const SERVER_PORT = process.env.SERVER_PORT;
    process.env.SERVER_PORT = 4000;
    const server = { listen: jest.fn() };
    const createServerSpy = jest.spyOn(http, 'createServer').mockReturnValue(server);
    require('./www');
    expect(createServerSpy).toBeCalledWith(app);
    expect(server.listen).toBeCalledWith('4000');
    process.env.SERVER_PORT = SERVER_PORT;
  });
});
