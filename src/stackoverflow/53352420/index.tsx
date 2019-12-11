import React, { Component } from 'react';

class SomeComponent extends Component {
  state = {
    errors: {
      '#selector': {},
    },
  };

  public getErrorPositionById = () => {
    const error = this.state.errors;
    return Object.keys(error).find((id) => error[id] != null);
  };

  public onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = this.getErrorPositionById() as string;
    const errorPosition = document.getElementById(id)!.offsetTop;
    window.scrollTo({
      top: errorPosition,
      behavior: 'smooth',
    });
  };

  public render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}></form>
      </div>
    );
  }
}

export default SomeComponent;
