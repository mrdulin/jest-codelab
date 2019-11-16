import React, { Component } from 'react';
import firebase from 'firebase';
import { withRouter } from 'react-router-dom';

class simple extends Component {
  signInWithgoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  render() {
    return (
      <div>
        <button onClick={this.signInWithgoogle.bind(this)}>Login with Google</button>
      </div>
    );
  }
}

export default withRouter(simple as any);
