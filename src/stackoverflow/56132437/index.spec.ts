import mongoose, { Mongoose, ConnectionOptions } from 'mongoose';
import { MongoError } from 'mongodb';

jest.mock('mongoose');

describe('connectDatabase', () => {
  const dbModule = require('./');

  it('should connect database succesfully', done => {
    const consoleLogSpyOn = jest.spyOn(console, 'log');
    const mongooseConnectSpyOn = jest
      .spyOn<Mongoose, 'connect'>(mongoose, 'connect')
      .mockImplementationOnce((uris: string, options?: ConnectionOptions, callback?: (err?: MongoError) => void) => {
        if (callback) {
          callback();
          done();
        }
        return Promise.resolve(mongoose);
      });

    dbModule.connectDatabase();
    expect(mongooseConnectSpyOn).toBeCalledWith(
      'localhost',
      { useCreateIndex: true, useNewUrlParser: true },
      dbModule.callback
    );
    expect(consoleLogSpyOn).toBeCalledWith('Succesfully Connected!');
    consoleLogSpyOn.mockRestore();
  });

  it('connect database error', done => {
    const consoleLogSpyOn = jest.spyOn(console, 'log');
    const mongooseConnectSpyOn = jest
      .spyOn<Mongoose, 'connect'>(mongoose, 'connect')
      .mockImplementationOnce((uris: string, options?: ConnectionOptions, callback?: (err?: MongoError) => void) => {
        if (callback) {
          callback(new Error('connect error'));
          done();
        }
        return Promise.resolve(mongoose);
      });

    dbModule.connectDatabase();
    expect(mongooseConnectSpyOn).toBeCalledWith(
      'localhost',
      { useCreateIndex: true, useNewUrlParser: true },
      dbModule.callback
    );
    expect(consoleLogSpyOn).toBeCalledWith('connect error');
    consoleLogSpyOn.mockRestore();
  });
});
