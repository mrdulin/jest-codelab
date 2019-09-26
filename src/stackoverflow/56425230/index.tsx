import React from 'react';
import moment from 'moment';

export class Header extends React.Component {
  public render() {
    const date = moment()
      .month(11)
      .date(24);

    return <div>{date.toString()}</div>;
  }
}
