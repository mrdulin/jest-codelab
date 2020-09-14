import Knex from 'knex';

export class MyClass {
  private knex: Knex;
  private transaction: Knex.Transaction;

  constructor(knex: Knex, transaction: Knex.Transaction) {
    this.knex = knex;
    this.transaction = transaction;
  }
  async myMethod(id: string) {
    return await this.knex
      .select('name')
      .withSchema('public')
      .from('table')
      .where({ id })
      .transacting(this.transaction);
  }
}
