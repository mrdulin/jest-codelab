import { IUserMap } from '../interfaces/user';
import User from '../user.model';

const users: IUserMap = {
  4: new User({ name: 'Mark' }),
  5: new User({ name: 'Paul' }),
};

function myRequest(url: string): Promise<User> {
  return new Promise((resolve, reject) => {
    const userID: number = Number.parseInt(url.substr('/users/'.length), 10);
    process.nextTick(() =>
      users[userID] ? resolve(users[userID]) : reject({ error: 'User with ' + userID + ' not found.' }),
    );
  });
}

export default myRequest;
