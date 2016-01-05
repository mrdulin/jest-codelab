import HttpResponse from './HttpResponse';
import DbSessionModule from './dbSessionModule';
import bcrypt from './bcrypt';
import signupModule from './signupModule';
import config from './config';

const controller = {
  post: (request, response) => {
    const dbSession = new DbSessionModule();
    const httpResponse = new HttpResponse();

    return Promise.all([bcrypt.hash(request.body.payload.password, config.saltRounds), dbSession.connect()])
      .then(promiseValues => {
        return signupModule.createAccount(dbSession, request.body.payload, promiseValues[0]);
      })
      .then(responsePayload => {
        httpResponse.setSuccess(201, 'ACCOUNT_CREATED', responsePayload);
        response.status(httpResponse.status).json(httpResponse);
      })
      .catch(error => {
        console.log(error);
        httpResponse.setReject(500, 'ACCOUNT_CREATION_ERROR', error);
        response.status(httpResponse.status).json(httpResponse);
      })
      .finally(() => {
        dbSession.release();
      });
  }
};

export default controller;
