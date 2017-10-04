import { IUser } from '../interfaces/user';
export default class User {
  public name: string = '';
  constructor(private user: IUser) {
    this.name = this.user.name;
  }
}
