import mg from 'mailgun-js';

// Get database name from configuration file
const mailgunConfig: mg.ConstructorParams = {
  apiKey: '123',
  domain: 'example.com',
};

// Setup Mailgun Service
const mailgun = mg(mailgunConfig);

// Mailgun Service class
export class Mailgun {
  /**
   * Static function to send an email.
   * @param {mg.messages.SendData} emailParams - parameters to sent an email.
   * @returns {Promise<mg.messages.SendResponse>} - maligun response with message and id.
   */
  static sendEmail = (emailParams: mg.messages.SendData): Promise<mg.messages.SendResponse> => {
    return mailgun.messages().send(emailParams);
  };
}
