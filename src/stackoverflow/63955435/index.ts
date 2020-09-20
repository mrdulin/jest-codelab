let cachedSecret: any;

const find = () => {
  console.log('cachedSecret:', cachedSecret, typeof cachedSecret);
  if (cachedSecret) {
    return 'something';
  } else {
    return 'something else';
  }
};

export { find };
