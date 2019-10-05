import React, { Component } from 'react';
import console = require('console');

class XComponent extends Component {
  constructor(props) {
    super(props);
    this.buildFormData = this.buildFormData.bind(this);
  }
  public buildFormData(event) {
    event.preventDefault();
    const { target } = event;
    const data: any = new FormData(target);

    if (target.querySelectorAll('.ant-select').length) {
      const selectTags = target.querySelectorAll('.ant-select');

      selectTags.forEach(selectTag => {
        const value = selectTag.querySelector('.ant-select-selection-selected-value').getAttribute('title');
        const property = selectTag.getAttribute('id');
        data.append(property, value);
      });
    }

    const getDataObject = {};
    for (const pair of data.entries()) {
      // Ensures that the data from the forms have a value
      if (pair[1]) {
        getDataObject[pair[0]] = pair[1];
      }
    }

    return getDataObject;
  }

  public render() {
    return (
      <div>
        <form onSubmit={this.buildFormData}></form>
      </div>
    );
  }
}

export default XComponent;
