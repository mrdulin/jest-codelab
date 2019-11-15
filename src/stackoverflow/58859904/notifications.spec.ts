import { subscribeToTopic } from './notifications';
import firebase from 'react-native-firebase';

jest.mock('react-native-firebase', () => {
  return {
    messaging: jest.fn().mockReturnThis(),
    subscribeToTopic: jest.fn()
  };
});

describe('notifications', () => {
  describe('topics', () => {
    const topic = 'topic';
    it('should subscribe to a topic', async () => {
      await subscribeToTopic(topic);
      expect(firebase.messaging().subscribeToTopic).toHaveBeenCalled();
    });
  });
});
