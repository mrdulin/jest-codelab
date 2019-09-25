import React, { Component } from 'react';

export interface ISomeComponentState {
  firstName: string;
  lastName: string;
  isDone: boolean;
  [key: string]: any;
}

export class SomeComponent extends Component<any, ISomeComponentState> {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      isDone: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  public render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            firstName:
            <input
              type="text"
              name="firstName"
              placeholder="enter your first name"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            lastName:
            <input
              type="text"
              name="lastName"
              placeholder="enter your last name"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
          </label>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }

  private handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({ [name]: value });
  }

  private handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    this.setState({ isDone: true });

    const nameMatch = () => {
      return !(this.state.firstName.match('^Cel.*') && this.state.firstName.endsWith('on'));
    };

    if (nameMatch()) {
      alert('Please enter a valid name');
      return;
    }

    if (!this.state.lastName.endsWith('on')) {
      alert('check lastname too');
      return;
    }
    this.getFullName();
  }

  private getFullName() {
    const { firstName, lastName } = this.state;
    return firstName + ' ' + lastName;
  }
}
