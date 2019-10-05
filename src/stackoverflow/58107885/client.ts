export interface myClient {
  getClient: (customerId: string) => Promise<string>;
}

const impClient = (): myClient => {
  return {
    getClient: async (customerId: string) => {
      return customerId;
    }
  };
};

export default impClient;
