import { Mutation } from './mutations';
import * as sgMail from '@sendgrid/mail';
import { RequestResponse } from 'request';

jest.mock('@sendgrid/mail', () => {
  return {
    setApiKey: jest.fn(),
    send: jest.fn()
  };
});

describe('Mutation', () => {
  describe('#signUpUser', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });
    it('should send a registration email, with a link, containing the id of the registration', async () => {
      (sgMail.send as jest.MockedFunction<typeof sgMail.send>).mockResolvedValueOnce([{} as RequestResponse, {}]);
      const actualValue = await Mutation.signUpUser({}, { data: {} }, { prisma: {} }, {});
      expect(actualValue).toEqual({ email: 'example@gmail.com' });
      expect(sgMail.send).toBeCalledWith({
        from: 'test@test.de',
        to: 'example@gmail.com',
        subject: 'Account validation',
        text: `validation Id: 1`
      });
    });
  });
});
