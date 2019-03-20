import User from './User';

const coin = () => Math.random() > 0.8;

const fetchData = (callback: (err: Error | null, user?: User) => void) => {
  setTimeout(() => {
    const user: User = new User('novaline', 26);
    if (coin()) {
      callback(null, user);
    } else {
      const error = new Error('error happened');
      callback(error);
    }
  }, 1000);
};

const fetchDataV2 = (num: number): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num > 0) {
        const user: User = new User('novaline', 26);
        resolve(user);
      } else {
        reject(new Error('user not exist'));
      }
    }, 1000);
  });
};

export { fetchData, fetchDataV2 };
