export const functionToBeTested = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('not logging :/');
      resolve('anything');
    }, 1000);
  });
};
