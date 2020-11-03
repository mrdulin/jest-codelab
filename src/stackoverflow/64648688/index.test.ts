import { setup_db } from './';
import { Sequelize, DataTypes } from 'sequelize';
import { mocked } from 'ts-jest/utils';

jest.mock('sequelize', () => {
  const mSequelize = {
    authenticate: jest.fn(),
    define: jest.fn(),
  };
  const actualSequelize = jest.requireActual('sequelize');
  return { Sequelize: jest.fn(() => mSequelize), DataTypes: actualSequelize.DataTypes };
});

const mSequelizeContext = new Sequelize();

describe('64648688', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should setup db correctly', async () => {
    const mTable1 = { hasMany: jest.fn(), sync: jest.fn() };
    const mTable2 = { sync: jest.fn() };
    mocked(mSequelizeContext.define).mockImplementation((modelName): any => {
      switch (modelName) {
        case 'table1':
          return mTable1;
        case 'table2':
          return mTable2;
      }
    });
    await setup_db(':memory:');
    expect(Sequelize).toBeCalledWith({ dialect: 'sqlite', storage: ':memory:' });
    expect(mSequelizeContext.authenticate).toBeCalled();
    expect(mSequelizeContext.define).toBeCalledWith(
      'table1',
      {
        fieldName_1: {
          type: DataTypes.STRING,
        },
      },
      { tableName: 'table1' },
    );
    expect(mSequelizeContext.define).toBeCalledWith(
      'table2',
      {
        fieldName_1: {
          type: DataTypes.STRING,
        },
      },
      { tableName: 'table2' },
    );
    expect(mTable1.hasMany).toBeCalledWith(mTable2);
    expect(mTable1.sync).toBeCalledTimes(1);
    expect(mTable2.sync).toBeCalledTimes(1);
  });
});
