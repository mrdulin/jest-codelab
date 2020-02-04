const Push = require('pushover-notifications');

const sendPushoverNotification = (message) => {
  const p = new Push({
    user: process.env.PUSHOVER_USER_KEY,
    token: process.env.PUSHOVER_AUTH_TOKEN,
    onerror: (error) => {},
  });

  const msg = {
    message,
    title: 'Title',
    sound: 'pushover',
    priority: 1,
  };

  p.send(msg, (error, result) => {
    if (error) {
      console.error('[Pushover] An error occurred.');
      console.error(error);
      return;
    }

    if (JSON.parse(result).status === 1) {
      console.log('[Pushover] Push notification sent.');
    } else {
      console.error('[Pushover] An error occurred.');
      console.error(result);
    }
  });
};

module.exports = sendPushoverNotification;
