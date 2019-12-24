import { Mailgun } from './mailgun';
import mg from 'mailgun-js';

jest.mock('mailgun-js', () => {
  const mMailgun = {
    messages: jest.fn().mockReturnThis(),
    send: jest.fn(),
  };
  return jest.fn(() => mMailgun);
});

// sendEmail Test Suite
describe('Send Email', () => {
  it('returns the promise of queued object with id and message keys when valid email is passed', async () => {
    // Preparing
    const emailParam = {
      from: 'noreply@shop.techardors.com',
      to: 'ecomm@api.com',
      subject: 'TechArdors Shopping: One-time passcode to reset the password',
      html:
        '<p>Please enter the passcode <strong>5124</strong> to reset the password. It expires in 5 minutes from the time it is requested.</p>',
    };
    const mailgun = mg({} as any);
    (mailgun.messages().send as jest.MockedFunction<any>).mockResolvedValueOnce({
      id: '222',
      message: 'Queued. Thank you.',
    });
    // Executing
    const result = await Mailgun.sendEmail(emailParam);
    // Verifying
    expect(result.message).toBe('Queued. Thank you.');
    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('message');
    expect(mailgun.messages).toBeCalled();
    expect(mailgun.messages().send).toBeCalledWith(emailParam);
  });
});
