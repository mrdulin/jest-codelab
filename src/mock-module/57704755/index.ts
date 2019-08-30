import { apiClient } from './apiClient';

async function main(parameter) {
  try {
    const res = await apiClient.get(parameter);
    console.log(res);
    return res;
  } catch (error) {
    throw new Error('get error');
  }
}

export { main };
