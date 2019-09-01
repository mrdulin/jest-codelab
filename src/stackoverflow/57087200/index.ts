import axios from 'axios';

async function getCustomer() {
  const url = 'https://github.com/mrdulin';
  const result = await axios.patch(url, { customerId: '12345' });
  return result;
}

export { getCustomer };
