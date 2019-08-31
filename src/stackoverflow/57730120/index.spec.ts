import { SubscriberInterceptor } from '.';

const interceptor = new SubscriberInterceptor();

const executionContext = {
  switchToHttp: jest.fn().mockReturnThis(),
  getRequest: jest.fn().mockReturnThis()
};

const callHandler = {
  handle: jest.fn()
};

describe('SubscriberInterceptor', () => {
  it('should be defined', () => {
    expect(interceptor).toBeDefined();
  });
  describe('#intercept', () => {
    it('t1', async () => {
      (executionContext.switchToHttp().getRequest as jest.Mock<any, any>).mockReturnValueOnce({
        body: { data: 'mocked data' }
      });
      callHandler.handle.mockResolvedValueOnce('next handle');
      const actualValue = await interceptor.intercept(executionContext, callHandler);
      expect(actualValue).toBe('next handle');
      expect(executionContext.switchToHttp().getRequest().body).toEqual({
        data: 'mocked data',
        addedAttribute: 'example'
      });
      expect(callHandler.handle).toBeCalledTimes(1);
    });
  });
});
