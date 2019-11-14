const csv = require('csvtojson');
const request = require('request');

export const getApiData = url => {
  return csv()
    .fromStream(request.get(url))
    .subscribe(json => json);
};
