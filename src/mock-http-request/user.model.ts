import { IUser } from './interfaces/user';

class User {
  private name: string = '';
  constructor(user?: IUser) {
    if (user) {
      this.name = user.name;
    }
  }

  public getName(): string {
    return this.name;
  }
}

export default User;
