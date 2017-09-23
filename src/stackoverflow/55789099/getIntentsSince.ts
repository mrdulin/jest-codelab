import HttpClient from './custom-http-client';

const client = new HttpClient();

const getIntentsSince = (currentTime, fromIntervalTime) => {
  return client.get(`url`).then(data => {
    return data;
  });
};

export default getIntentsSince;
