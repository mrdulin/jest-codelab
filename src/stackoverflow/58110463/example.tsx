import React, { Component } from 'react';
import { userLogin } from './service';

export interface ILoginProps {
  handleSubmit(): void;
}

interface ILoginState {
  isLoggedIn: boolean;
}

export class Login extends Component<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }
  public handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.props.handleSubmit) {
      this.props.handleSubmit();
    }
    this.setState({ isLoggedIn: true });

    const data = {};
    return userLogin(data).then(
      res => {
        console.log(res);
      },
      err => {
        console.error(err);
      }
    );
  }
  public render() {
    return (
      <form id="login-form" onSubmit={e => this.handleSubmit(e)}>
        <input type="username" />
        <input type="password" />
        <button type="submit">Login</button>
      </form>
    );
  }
}
