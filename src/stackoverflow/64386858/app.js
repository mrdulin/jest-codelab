const crypto = require('crypto');

function main() {
  const API_TOKEN = 'API_TOKEN';
  const signature = '123';
  const body = {};

  const hash = crypto
    .createHmac('sha256', API_TOKEN)
    .update(JSON.stringify(body))
    .digest('hex');

  if (hash === signature) {
    console.log('verified successfully. Implement next logic');
  }
}

module.exports = main;
