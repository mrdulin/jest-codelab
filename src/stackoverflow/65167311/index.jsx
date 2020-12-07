import { apiService } from './services';
import { Component } from 'react';

export class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentId: 123,
    };
  }
  componentDidMount() {
    this.getMappedContent()
      .then((content) => {
        console.log(content);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getMappedContent = async () => {
    if (!this.state.contentId) {
      return;
    }
    const requestParams = {
      contentId: this.state.contentId,
    };
    //getting existing mapContent item if exist
    return await apiService.getUser(requestParams);
  };
  render() {
    return <div>MyComponent</div>;
  }
}
