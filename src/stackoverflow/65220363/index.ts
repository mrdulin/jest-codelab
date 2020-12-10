import SendBird from 'sendbird';

const API_Token = 'test api token';
const APP_ID = 'test api id';

export const sbConnect = (userId) => {
  return new Promise((resolve, reject) => {
    const sb = new SendBird({ appId: APP_ID });
    sb.connect(userId, API_Token, (user, error) => {
      if (error) {
        reject(error);
      } else {
        resolve(user);
      }
    });
  });
};
