import { IUserMap } from '../interfaces/user';
import User from '../models/User';

const users: IUserMap = {
  4: new User({ name: 'Mark' }),
  5: new User({ name: 'Paul' })
};

export default function request(url: string) {
  return new Promise((resolve, reject) => {
    const userID: number = parseInt(url.substr('/users/'.length), 10);
    process.nextTick(
      () =>
        users[userID]
          ? resolve(users[userID])
          : reject({
              error: 'User with ' + userID + ' not found.'
            })
    );
  });
}
