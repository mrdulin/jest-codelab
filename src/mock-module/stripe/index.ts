import Stripe from 'stripe';
const stripe = new Stripe('123');

async function getCustomer(email) {
  return stripe.customers.create({ email });
}
export { getCustomer };
