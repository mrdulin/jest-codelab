const utils = {
  getJSON: data => JSON.stringify(data),
  authorize: () => 'token',
  isAuthorized: secret => secret === 'wizard'
};

export default utils;
