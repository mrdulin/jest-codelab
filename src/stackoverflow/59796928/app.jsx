import React from 'react';
import { Table } from './table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }

  handleSubmit = (number1, number2) => {
    this.setState({ number: this.handleMultiply(number1, number2) });
  };

  handleMultiply = (number1, number2) => {
    return number1 * number2;
  };

  render() {
    const { number } = this.state;

    return (
      <div className="App">
        <form onSubmit={(e) => this.handleSubmit(3, 7)}>
          <input type="submit" name="Submit" value="Multiply" />
        </form>
        <Table number={number} />
      </div>
    );
  }
}

export default App;
