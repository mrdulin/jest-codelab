const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const simplemail = () => {
  const msg = {
    to: "receiver@mail.com",
    from: "sender@test.com",
    subject: "TEST Sendgrid with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    mail_settings: {
      sandbox_mode: {
        enable: true
      }
    }
  };
  (async () => {
    try {
      console.log(await sgMail.send(msg));
    } catch (err) {
      console.error(err.toString());
    }
  })();
};

export default simplemail;
