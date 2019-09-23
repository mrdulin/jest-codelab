import { main, METHOD_DATA, DETAILS, OPTIONS } from './';
const { PaymentRequest } = require('react-native-payments');

jest.mock('react-native-payments', () => {
  const PaymentRequestMocked = {
    canMakePayment: jest.fn()
  };
  return {
    PaymentRequest: jest.fn(() => PaymentRequestMocked)
  };
});

const paymentRequest = new PaymentRequest(METHOD_DATA, DETAILS, OPTIONS);

describe('main', () => {
  beforeEach(() => {
    paymentRequest.canMakePayment.mockReset();
  });
  it.each`
    value               | name
    ${'mocked value 1'} | ${'t1'}
    ${'mocked value 2'} | ${'t2'}
  `(`$name`, async ({ value }) => {
    paymentRequest.canMakePayment.mockResolvedValueOnce(value);
    const actualValue = await main();
    expect(actualValue).toEqual(value);
    expect(paymentRequest.canMakePayment).toBeCalledTimes(1);
  });
});
