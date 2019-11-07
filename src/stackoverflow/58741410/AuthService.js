export default class AuthService {
  constructor() {
    this.fetch = this.fetch.bind(this);
  }
  fetch(url) {
    return fetch(url).then(res => {
      return res.json();
    });
  }
}
