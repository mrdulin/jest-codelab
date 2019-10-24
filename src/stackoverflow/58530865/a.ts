import { helper } from './utils';

export const myFunc = helper(async () => null, 1000);

export const getData = () => {
  return myFunc().then(console.log);
};
