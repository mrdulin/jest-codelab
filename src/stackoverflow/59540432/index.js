const { Client } = require('pg');
const { success, failure } = require('./handler');

export const getAlerts = async (event, context) => {
  const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.PORT,
  });

  await client.connect();

  try {
    const result = await client.query(`SELECT * FROM public.alerts;`);
    console.log(result.rows);
    client.end();
    return success({ message: `${result.rowCount} item(s) returned`, data: result.rows, status: true });
  } catch (e) {
    console.error(e.stack);
    client.end();
    return failure({ message: e, status: false });
  }
};
