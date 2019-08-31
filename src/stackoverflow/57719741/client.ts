const client = {
  items: () => {
    return client;
  },
  type: (name: string) => {
    return client;
  },
  toObservable: () => {
    return client;
  },
  subscribe: handler => {
    handler();
    return client;
  }
};

export { client };
