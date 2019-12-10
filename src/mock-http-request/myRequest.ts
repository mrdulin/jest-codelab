import http from 'http';

function myRequest<T>(url: string): Promise<T> {
  return new Promise((resolve) => {
    http.get({ path: url }, (response: http.IncomingMessage): void => {
      let result: any;
      response.on('data', (data: any) => (result += data));
      response.on('end', () => resolve(result));
    });
  });
}

export default myRequest;
