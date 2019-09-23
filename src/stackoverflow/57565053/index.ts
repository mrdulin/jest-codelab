const { PaymentRequest } = require('react-native-payments');

const METHOD_DATA = [
  {
    supportedMethods: ['apple-pay'],
    data: {
      merchantIdentifier: 'merchant.com.your-app.namespace',
      supportedNetworks: ['visa', 'mastercard', 'amex'],
      countryCode: 'US',
      currencyCode: 'USD'
    }
  }
];

const DETAILS = {
  id: 'basic-example',
  displayItems: [
    {
      label: 'Movie Ticket',
      amount: { currency: 'USD', value: '15.00' }
    }
  ],
  total: {
    label: 'Merchant Name',
    amount: { currency: 'USD', value: '15.00' }
  }
};

const OPTIONS = {
  requestPayerName: true
};

function main() {
  const paymentRequest = new PaymentRequest(METHOD_DATA, DETAILS, OPTIONS);
  return paymentRequest.canMakePayment();
}

export { main, METHOD_DATA, DETAILS, OPTIONS };
