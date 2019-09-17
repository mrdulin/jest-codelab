jest.mock('./anotherFunction');

const myFunction = require('./myFunction');
const anotherFunction = require('./anotherFunction');

describe('test suites', () => {
  test('should call pwmWrite() and anotherFunction()', () => {
    const app = {};
    const io = { emit: jest.fn() };
    const id = '1';
    const value = 'jest';
    const req = {
      query: { id, value },
      app: {
        locals: {
          target1: { pwmWrite: jest.fn() }
        }
      }
    };
    const res = { send: jest.fn() };
    myFunction(app, io)(req, res);
    expect(anotherFunction).toBeCalledWith(app, io);
    expect(req.app.locals.target1.pwmWrite).toBeCalledWith(value);
  });
});
