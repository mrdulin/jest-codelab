import request from './myRequest';
import User from './user.model';
import { IUser } from './interfaces/user';

async function getUserById(userId: number): Promise<User> {
  return request<IUser>('/users/' + userId)
    .then(
      (user: IUser): User => {
        return new User(user);
      },
    )
    .catch((error) => {
      console.error(error);
      return Promise.reject(error);
    });
}

export { getUserById };
