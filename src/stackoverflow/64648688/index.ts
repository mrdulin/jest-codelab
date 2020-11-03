import { Sequelize, DataTypes } from 'sequelize';

export const setup_db = async (db_path: string) => {
  const sequelizeContext = new Sequelize({
    dialect: 'sqlite',
    storage: db_path,
  });

  try {
    await sequelizeContext.authenticate();
  } catch (err) {
    throw err;
  }

  const Table1 = sequelizeContext.define(
    'table1',
    {
      fieldName_1: {
        type: DataTypes.STRING,
      },
    },
    { tableName: 'table1' },
  );

  const Table2 = sequelizeContext.define(
    'table2',
    {
      fieldName_1: {
        type: DataTypes.STRING,
      },
    },
    { tableName: 'table2' },
  );

  (Table1 as any).hasMany(Table2);

  await Table1.sync();
  await Table2.sync();
};
