import React, { Component } from 'react';
import * as templateService from './templateService';

class SomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {
        api: '',
      },
    };
  }
  downloadExcel = () => {
    templateService.getTemplate().then(
      (response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Project_register_template_PMB.xlsx');
        document.body.appendChild(link);
        link.click();
      },
      (error) => {
        this.setState({
          errors: { api: `API error:${error}, please contact an administrator` },
        });
      },
    );
  };

  render() {
    return <button onClick={() => this.downloadExcel()}>Download</button>;
  }
}

export default SomeComponent;
