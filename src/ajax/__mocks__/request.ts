import {IUser} from '../interfaces/user';

const users: IUser = {
  4: {name: 'Mark'},
  5: {name: 'Paul'}
};

export default function request(url: string) {
  return new Promise((resolve, reject) => {
    const userID: number = parseInt(url.substr('/users/'.length), 10);
    process.nextTick(
      () => users[userID] ? resolve(users[userID]) : reject({
        error: 'User with ' + userID + ' not found.'
      })
    );
  });
}
