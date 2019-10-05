import console = require('console');

export class Db {
  public connection = {
    collection(model: string) {
      return {
        async updateOne(...args) {
          console.log('update one');
        }
      };
    }
  };
  public async connect() {
    console.log('connect db');
  }
}
