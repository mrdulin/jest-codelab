import * as models from './models';
import { MongoDb, Models } from './interfaces';

export class UserDataSource {
  private models: Models | null = null;
  public initialize(mongodb: MongoDb): this {
    if (!this.models) {
      this.models = {
        users: new models.UserModel(mongodb)
      };
    }
    return this;
  }

  public getModels(): Models | null {
    return this.models || null;
  }
}
