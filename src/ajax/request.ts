import * as http from 'http';

export default function request(url: string) {
  return new Promise(resolve => {
    http.get(
      { path: url },
      (response: http.IncomingMessage): void => {
        let result: any;
        response.on('data', (data: any) => (result += data));
        response.on('end', () => resolve(result));
      }
    );
  });
}
