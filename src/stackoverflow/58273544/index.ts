import axios from 'axios';

export async function getUserDataByIds(ids: string[]) {
  try {
    const users = await axios.get('/users');
    return users;
  } catch (err) {
    return new Map();
  }
}
