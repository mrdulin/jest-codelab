import { ApiActions } from './ApiActions';

export class SomeClass {
  public static createNew(data) {
    ApiActions.post('/api/projects', data, (err, response) => {
      // this is the callback I want to test gets triggered
      if (!err) {
        this.hideCreateNew();
      }
    });
  }

  public static hideCreateNew() {}
}
