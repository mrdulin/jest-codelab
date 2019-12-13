import React, { Component } from 'react';
import axios from 'axios';

class SetStoreOverlay extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }
  getStores = (term) => {
    const uri = `/searchux/api/v1/storeProxy?term=${term}`;

    return axios
      .get(uri)
      .then((response) => console.log(response))
      .catch((error) => {
        this.props.onStoreFetch([], true);
      });
  };

  onSearchClick = () => {
    return this.getStores(this.state.searchText);
  };

  render() {
    return <div></div>;
  }
}

export default SetStoreOverlay;
