import { Service, FundMock } from '.';

const service = new Service();

describe('Service', () => {
  describe('#getFund', () => {
    it('t1', async () => {
      service.getFund = jest.fn().mockResolvedValueOnce(FundMock);
      const actualValue = await service.getFund();
      expect(actualValue).toEqual(FundMock);
    });
  });
});
