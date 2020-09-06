import { userTable } from './userTable';
import { User } from './user';

export class UserRepo {
  static getBypNick(pNick = '') {
    const userSearchRegex = new RegExp(`^${pNick.toLowerCase()}`, 'i');

    return new Promise((resolve, reject) => {
      userTable
        .find({
          _pNick: userSearchRegex,
        })
        .sort({
          _pNick: 1,
        })
        .exec(function(err, result) {
          if (err) {
            return reject(err);
          }
          const userArray = result.map((user) => {
            return new User(user._pNick, user._firstName, user._userName, user._phoneNumber, user._userID);
          });
          return resolve(userArray);
        });
    });
  }
}
