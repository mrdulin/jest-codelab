import { SNS } from 'aws-sdk';

export const thishandler = async (event): Promise<any> => {
  const snsMessagetoBeSent = {};
  const response = await sendThisToSNS(snsMessagetoBeSent);
  return response;
};

async function sendThisToSNS(thisMessage) {
  const sns = new SNS();
  const TOPIC_ARN = process.env.THIS_TOPIC_ARN;

  const params = {
    Message: JSON.stringify(thisMessage),
    TopicArn: TOPIC_ARN,
  };

  return await sns.publish(params).promise();
}
