import impClient from './client';

export function main(customerId) {
  return impClient().getClient(customerId);
}
