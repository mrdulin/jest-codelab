import request from './request';
import User from './models/User';

export async function getUserName(userId: number): Promise<string> {
  return request('/users/' + userId).then(
    (user: any): string => {
      if (user) {
        return new User(user).name;
      }
      return '';
    }
  );
}
