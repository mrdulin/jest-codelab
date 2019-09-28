import User from './User';

const fetchData = (callback: (err: Error | null, user?: User) => void) => {
  const user: User = new User('novaline', 26);
  callback(null, user);
};

const fetchDataV2 = (num: number): Promise<User> => {
  return new Promise((resolve, reject) => {
    if (num > 0) {
      const user: User = new User('novaline', 26);
      resolve(user);
    } else {
      reject(new Error('user not exist'));
    }
  });
};

export { fetchData, fetchDataV2 };
