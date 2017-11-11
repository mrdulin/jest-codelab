import React, { Component } from 'react';
import { CustomComponent } from './CustomComponent';
import fetch from 'node-fetch';

interface IMainState {
  testData: {
    data: any[];
  };
}

class Main extends Component<any, IMainState> {
  constructor(props) {
    super(props);

    this.state = {
      testData: {
        data: []
      }
    };
  }

  public componentDidMount() {
    fetch(`http://testurl.com/testData`)
      .then(response => response.json())
      .then(result => this.setState({ testData: result }));
  }

  public render() {
    const { testData } = this.state;

    return (
      <div className="main">
        {testData.data && (
          <section>
            <CustomComponent movies={testData.data} />
          </section>
        )}
      </div>
    );
  }
}

export default Main;
