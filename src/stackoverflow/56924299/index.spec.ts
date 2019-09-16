import '@babel/polyfill';

import controller from './';
import DbSessionModule from './dbSessionModule';
import bcrypt from './bcrypt';
import signupModule from './signupModule';
import config from './config';
import HttpResponse from './HttpResponse';

const request = {
  body: {
    payload: {
      password: ''
    }
  }
};
const response = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn().mockReturnThis()
};

const HttpResponseMocked = {
  setSuccess: jest.fn().mockImplementation(status => {
    HttpResponseMocked.status = status;
  }),
  setReject: jest.fn().mockImplementation(status => {
    HttpResponseMocked.status = status;
  }),
  status: 0
};

jest.mock('./HttpResponse.ts', () => {
  return jest.fn(() => HttpResponseMocked);
});

jest.mock('./bcrypt.ts');

const DbSessionModuleMocked = {
  connect: jest.fn(),
  release: jest.fn()
};

jest.mock('./dbSessionModule.ts', () => {
  return jest.fn(() => DbSessionModuleMocked);
});

jest.mock('./signupModule.ts');

const dbSessionModule = new DbSessionModule();
const httpResponse = new HttpResponse();

describe('controller', () => {
  describe('#post', () => {
    request.body.payload.password = '123';
    config.saltRounds = 'mocked salt';

    beforeEach(() => {
      (dbSessionModule as jest.Mocked<DbSessionModule>).connect.mockReset();
      (dbSessionModule as jest.Mocked<DbSessionModule>).release.mockReset();
    });
    it('create account correctly', async () => {
      (bcrypt as jest.Mocked<typeof bcrypt>).hash.mockResolvedValueOnce('mocked hash');
      (dbSessionModule as jest.Mocked<DbSessionModule>).connect.mockResolvedValueOnce({});
      (signupModule as jest.Mocked<typeof signupModule>).createAccount.mockResolvedValueOnce({ accountId: 1 });

      await controller.post(request, response);

      expect(bcrypt.hash).toBeCalledWith('123', 'mocked salt');
      expect(dbSessionModule.connect).toBeCalledTimes(1);
      expect(signupModule.createAccount).toBeCalledWith(dbSessionModule, { password: '123' }, 'mocked hash');
      expect(httpResponse.setSuccess).toBeCalledWith(201, 'ACCOUNT_CREATED', { accountId: 1 });
      expect(response.status).toBeCalledWith(201);
      expect(response.json).toBeCalledWith(httpResponse);
      expect(dbSessionModule.release).toBeCalledTimes(1);
    });

    it('create account error', async () => {
      (bcrypt as jest.Mocked<typeof bcrypt>).hash.mockResolvedValueOnce('mocked hash');
      (dbSessionModule as jest.Mocked<DbSessionModule>).connect.mockResolvedValueOnce({});
      (signupModule as jest.Mocked<typeof signupModule>).createAccount.mockRejectedValueOnce(new Error('some error'));

      await controller.post(request, response);

      expect(bcrypt.hash).toBeCalledWith('123', 'mocked salt');
      expect(dbSessionModule.connect).toBeCalledTimes(1);
      expect(signupModule.createAccount).toBeCalledWith(dbSessionModule, { password: '123' }, 'mocked hash');
      expect(httpResponse.setReject).toBeCalledWith(500, 'ACCOUNT_CREATION_ERROR', new Error('some error'));
      expect(response.status).toBeCalledWith(500);
      expect(response.json).toBeCalledWith(httpResponse);
      expect(dbSessionModule.release).toBeCalledTimes(1);
    });
  });
});
