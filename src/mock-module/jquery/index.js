// tslint:disable-next-line: no-var-requires
const $ = require('jquery');

class Component {
  constructor() {
    this.state = {
      userName: 'me',
      passWord: 'pass'
    };
  }
  componentDidMount() {
    const params = {
      userName: this.state.userName,
      password: this.state.passWord
    };

    $.default.ajax({
      url: '/reactApp/login',
      dataType: 'json',
      contentType: 'application/json;',
      type: 'POST',
      data: JSON.stringify(params),
      success: () => {},
      error: () => {}
    });
  }
}

module.exports = Component;
