interface Fund {
  isin: string;
  name: string;
  fed: boolean;
  currency: string;
  fund_type: string;
  company: string;
}

export const FundMock: Fund = {
  isin: 'FR0000000000',
  name: 'Test',
  currency: 'EUR',
  fund_type: 'uc',
  company: '5cf6697eecb759de13fc2c73',
  fed: true
};

class Service {
  public async getFund() {
    return 'real fund data';
  }
}

export { Service };
