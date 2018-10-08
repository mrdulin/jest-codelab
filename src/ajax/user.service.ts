import request from './request';
import User from './models/User';

export function getUserName(userId: number): Promise<string> {
  return request('/users/' + userId).then((user: User): string => user.name);
}


