import AWS from 'aws-sdk';

const sqs = new AWS.SQS({
  region: 'us-east-1'
});

const sendMessage = async (msg, queueUrl) => {
  try {
    const params = {
      MessageBody: JSON.stringify(msg),
      QueueUrl: queueUrl
    };
    const res = await sqs.sendMessage(params).promise();
    return res;
  } catch (err) {
    console.log('Error:', `failed to send message ${err}`);
    throw new Error(err);
  }
};

export { sendMessage as default };
