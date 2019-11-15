import firebase from 'react-native-firebase';

export async function subscribeToTopic(topic) {
  await firebase.messaging().subscribeToTopic(topic);
}
