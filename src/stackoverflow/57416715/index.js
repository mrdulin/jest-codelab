const request = require('request-promise-native');
const recaptcha = {
  endpoint: 'https://www.google.com/recaptcha/api/siteverify',
  secretKey: process.env.RECAPTCHA_SECRET_KEY || null
};

class ReCaptcha {
  /**
   * Verifies the captcha token response
   * @param {String} response - The client token response
   * @returns {Promise<Boolean>} - Whether the captcha token is valid
   */
  static async verify(response) {
    const requestOptions = {
      url: recaptcha.endpoint,
      qs: {
        secret: recaptcha.secretKey,
        response
      },
      json: true
    };

    const data = await request.post(requestOptions);

    return data.success;
  }
}

module.exports = ReCaptcha;
