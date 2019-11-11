import * as auth0 from './auth0';

export class AuthService {
  private auth0: any;
  constructor(clientID: string, domain: string, redirectUri: string) {
    this.auth0 = new auth0.WebAuth({
      clientID,
      domain,
      responseType: 'token id_token',
      redirectUri
    });
  }

  public login(username: string, password: string) {
    return new Promise((resolve, reject) => {
      this.auth0.client.login(
        {
          realm: 'Username-Password-Authentication',
          username,
          password
        },
        (err, authResult) => {
          if (err) {
            reject(err);
          }
          if (authResult && authResult.idToken && authResult.accessToken) {
            resolve(authResult.idToken);
          }
        }
      );
    });
  }
}
