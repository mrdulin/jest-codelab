let { auth } = require('./auth');

let authToken = undefined;

const checkIfTokenIsValid = async () => {
  if (authToken) {
    authToken = await auth();
  }
};

module.exports = {
  checkIfTokenIsValid,
};
