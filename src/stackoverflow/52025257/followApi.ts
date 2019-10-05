import { httpServise } from './httpServise';

const host = 'http://github.com/mrdulin';
const port = 3000;

const followApi = {
  handleFavorite: data => {
    return new Promise((resolve, reject) => {
      httpServise.patch(`${host}:${port}/followings/handle-favorite`, data).then(
        (res: any) => {
          if (res.data.payload) {
            resolve(res.data.payload);
          } else {
            reject({ status: 401 });
          }
        },
        err => reject(err)
      );
    });
  }
};

export default followApi;
