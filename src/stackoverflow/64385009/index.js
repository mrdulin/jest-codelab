const axios = require('axios');

async function getUser(id) {
  const user = await axios.get('./user');
  return user;
}
module.exports = {
  getUser,
};
