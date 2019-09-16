import axios from 'axios';

class DataService {
  public static async getdata() {
    return axios.get(`https://github.com/mrdulin`).then(() => {
      return {
        name: 'real name',
        key: 'real key',
        expiration: null
      };
    });
  }
}

export { DataService };
