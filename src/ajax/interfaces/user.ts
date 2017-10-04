/**
 * Created by dulin on 2017/7/6.
 */
import User from '../models/User';

export interface IUserMap {
  [index: number]: User;
}

export interface IUser {
  name: string;
}
