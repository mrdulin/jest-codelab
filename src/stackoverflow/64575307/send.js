const admin = require('firebase-admin');

async function myCloudFn(email) {
  const authUser = await admin.auth().getUserByEmail(email);
  return authUser;
}

module.exports = { myCloudFn };
