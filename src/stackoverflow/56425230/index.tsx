import React from 'react';
import moment from 'moment';

export class Header extends React.Component {
  public render() {
    const date = moment()
      .month(10)
      .date(24)
      .utc();

    return <div>{date.toISOString()}</div>;
  }
}
