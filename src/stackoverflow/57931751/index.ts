import axios from 'axios';

const user = 'user';

export const Users = {
  getUser: async id => {
    const result = await axios.get(`${user + id}.json`).then(({ data }) => data);
    return result;
  }
};
