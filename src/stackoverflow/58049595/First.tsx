import React from 'react';
import TelemetryFramework from './TelemetryFramework';

class First extends TelemetryFramework {
  constructor(props) {
    super(props);
  }
  public getData() {
    const data = this.getconfidentialData();
    this.telemetryInfo('data fetched..');
  }
  public render() {
    return <div>First</div>;
  }
}

export default First;
