const dataService = require('./dataService');

exports.lambdaService = async event => {
  let response = await serviceFunction(event.id);
  if (response.code == 200) {
    return response;
  } else {
    return {
      statusCode: response.code,
      body: JSON.stringify({
        message: response.message
      })
    };
  }
};

const serviceFunction = async id => {
  return await dataService.retrieveData(id);
};
