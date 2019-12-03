import simplemail from "./";
const sgMail = require("@sendgrid/mail");

jest.mock("@sendgrid/mail", () => {
  return {
    setApiKey: jest.fn(),
    send: jest.fn()
  };
});

describe("#sendingmailMockedway", () => {
  afterEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });
  it("Should send mail with specefic value", done => {
    const logSpy = jest.spyOn(console, "log");
    const mResponse = "send mail success";
    sgMail.send.mockResolvedValueOnce(mResponse);
    simplemail();
    setImmediate(() => {
      expect(sgMail.send).toBeCalledWith({
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
      });
      expect(logSpy).toBeCalledWith(mResponse);
      done();
    });
  });

  it("should print error when send email failed", done => {
    const errorLogSpy = jest.spyOn(console, "error");
    const mError = new Error("network error");
    sgMail.send.mockRejectedValueOnce(mError);
    simplemail();
    setImmediate(() => {
      expect(sgMail.send).toBeCalledWith({
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
      });
      expect(errorLogSpy).toBeCalledWith(mError.toString());
      done();
    });
  });
});
