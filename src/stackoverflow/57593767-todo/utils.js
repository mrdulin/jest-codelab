const auth = require('./auth.js');

let authToken = undefined;

const checkIfTokenIsValid = async () => {
  console.log(authToken);
  if (authToken) {
    authToken = await auth.auth();
  }
};

module.exports = {
  checkIfTokenIsValid,
  authToken
};
