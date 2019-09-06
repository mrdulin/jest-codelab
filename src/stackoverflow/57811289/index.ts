interface IKnex {
  where(...args: any): any;
  raw(...args: any): any;
  select(...args: any): any;
  then(): any;
}

class SomeDaoImpl {
  private knex: IKnex;
  constructor({ knex }) {
    this.knex = knex;
  }
  public findById(id: string) {
    return this.knex.where({ id }).select();
  }
}

export { SomeDaoImpl, IKnex };
