import { Component } from 'react';
import axios from 'axios';

class MyComponent extends Component {
  public async componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => res.data)
      .catch(err => 'catch error');
  }

  public render() {
    return null;
  }
}

export default MyComponent;
