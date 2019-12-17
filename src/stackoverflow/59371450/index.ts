export const authorizer = (event, context, callback) => {
  const token = event.authorizationToken;
  const policyDocument = {};
  try {
    callback(null, policyDocument);
  } catch (e) {
    callback('Unauthorized');
  }
};
