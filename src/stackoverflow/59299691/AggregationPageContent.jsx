import React from 'react';
import { ajaxGet } from './_utility';

const tlsAggregationPage = { restUrl: 'https://example.com', termId: '1' };

export class AggregationPageContent extends React.Component {
  constructor() {
    super();
    this.state = {
      data: false,
      page: 0,
    };
  }

  componentDidMount() {
    const { restUrl, termId } = tlsAggregationPage;

    ajaxGet({
      url: `${restUrl}/category/${termId}?page=${this.state.page}`,
      success: (response) => {
        this.setState({
          data: response,
          page: 1,
        });
      },
    });
  }

  render() {
    return null;
  }
}
