import axios from 'axios';

export async function main() {
  const numbersRes = await axios.get('api/numbers');
  const lettersRes = await axios.get('api/letters');
  return { numbersRes, lettersRes };
}
