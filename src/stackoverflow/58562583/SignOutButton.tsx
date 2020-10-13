import React from 'react';
import Firebase from './firebase';

console.log(Firebase.auth);
console.log('should keep same reference to authObject:', Firebase.auth() === Firebase.auth());

const SignOutButton = () => (
  <button type="button" onClick={() => Firebase.auth().signOut()}>
    Sign Out
  </button>
);

export default SignOutButton;
