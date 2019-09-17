import { UserDataSource } from './';
import { MongoDb } from './interfaces';
import * as models from './models';

describe('UserDataSource', () => {
  const mockedMongodb: MongoDb = {};
  describe('#initialize', () => {
    it('should initlialize models correctly', () => {
      const userDataSource = new UserDataSource();
      const actualValue = userDataSource.initialize(mockedMongodb);
      expect(userDataSource.getModels()).toEqual(expect.objectContaining({ users: expect.any(models.UserModel) }));
      expect(actualValue).toBe(userDataSource);
    });
    it('should not initialize models', () => {
      const userDataSource = new UserDataSource();
      // tslint:disable-next-line: no-string-literal
      userDataSource['models'] = [];
      const actualValue = userDataSource.initialize(mockedMongodb);
      expect(actualValue).toBe(userDataSource);
    });
  });

  describe('#getModels', () => {
    it('should get models correctly', () => {
      const userDataSource = new UserDataSource();
      const actualValue = userDataSource.getModels();
      expect(actualValue).toEqual(null);
    });

    it('should get models correctly and not null', () => {
      const userDataSource = new UserDataSource();
      // tslint:disable-next-line: no-string-literal
      userDataSource['models'] = [];
      const actualValue = userDataSource.getModels();
      expect(actualValue).toEqual([]);
    });
  });
});
