import checkNetwork from './checkNetwork';
import fetch from 'node-fetch';

export const postRequestWithoutHeader = (fullUrlRoute: string, body: object) =>
  checkNetwork().then(() =>
    fetch(fullUrlRoute, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    }).then(response =>
      response.json().then(json => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        return json;
      })
    )
  );
