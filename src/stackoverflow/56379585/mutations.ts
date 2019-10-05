import * as sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.MAIL_API_KEY || '');

export const Mutation = {
  async signUpUser(parent, { data }, { prisma }, info) {
    const user = { email: 'example@gmail.com' };
    const registration = { id: '1' };
    const emailData = {
      from: 'test@test.de',
      to: `${user.email}`,
      subject: 'Account validation',
      text: `validation Id: ${registration.id}`
    };
    await sgMail.send(emailData);

    return user;
  }
};
