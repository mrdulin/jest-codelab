// import stripe from 'stripe';
import { getCustomer } from './';

jest.mock('stripe', () => {
  const mockStripe = {
    customers: {
      create: jest.fn()
    }
  };
  return jest.fn(() => mockStripe);
});

describe('stripe', () => {
  it('should mock correctly', async () => {
    stripe.customers.create.mockResolvedValueOnce({ email: 'mockValue@gmail.com' });
    const customer = await getCustomer('123@gmail.com');
    expect(customer).toEqual({ email: 'mockValue@gmail.com' });
    expect(stripe().customers.create).toBeCalledWith({ email: '123@gmail.com' });
  });
});
