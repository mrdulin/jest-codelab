import axios from 'axios';

function main() {
  return axios
    .get('url')
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}

export { main };
