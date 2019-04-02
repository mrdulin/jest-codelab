import amqp from 'amqplib';

const RABBITMQ_USER = 'RABBITMQ_USER';
const RABBITMQ_PASS = 'RABBITMQ_PASS';
const RABBITMQ_URL = 'RABBITMQ_URL';
const RABBITMQ_PORT = 'RABBITMQ_PORT';

export default function(key, data, exchange = 'portal.topic', options = { type: 'topic' }) {
  return amqp
    .connect(`amqp://${RABBITMQ_USER}:${RABBITMQ_PASS}@${RABBITMQ_URL}:${RABBITMQ_PORT}`)
    .then((conn) => {
      return conn.createChannel().then((ch) => {
        ch.assertExchange(exchange, options.type, { durable: true });
        ch.publish(exchange, key, Buffer.from(JSON.stringify(data)));
        return conn;
      });
    })
    .then((conn) => conn.close());
}
