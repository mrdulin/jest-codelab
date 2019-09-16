import React from 'react';
import axios from 'axios';

export class SomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  public render() {
    return (
      <div>
        <button type="button" value="Logout" onClick={this.handleLogout}>
          Logout
        </button>
      </div>
    );
  }

  private handleLogout(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    axios
      .post('/logout')
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
