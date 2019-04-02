import createChannel from './';
import amqp from 'amqplib';

describe('44922162', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('should create channel correctly', async () => {
    const mCh = { assertExchange: jest.fn(), publish: jest.fn() };
    const mConn = { createChannel: jest.fn().mockResolvedValueOnce(mCh), close: jest.fn() };
    const connectSpy = jest.spyOn(amqp, 'connect').mockResolvedValueOnce(mConn);
    const data = { payload: '123' };
    await createChannel('key', data);
    expect(connectSpy).toBeCalledWith('amqp://RABBITMQ_USER:RABBITMQ_PASS@RABBITMQ_URL:RABBITMQ_PORT');
    expect(mConn.createChannel).toBeCalledTimes(1);
    expect(mCh.assertExchange).toBeCalledWith('portal.topic', 'topic', { durable: true });
    expect(mCh.publish).toBeCalledWith('portal.topic', 'key', Buffer.from(JSON.stringify(data)));
    expect(mConn.close).toBeCalledTimes(1);
  });
});
