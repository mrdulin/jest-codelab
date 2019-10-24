export const helper = (promiseFunc, time) => (...args) =>
  Promise.race([promiseFunc(...args), new Promise((_, reject) => null)]);
