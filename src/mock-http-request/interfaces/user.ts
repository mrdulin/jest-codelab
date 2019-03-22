import User from '../user.model';

export interface IUserMap {
  [index: number]: User;
}

export interface IUser {
  name: string;
}
