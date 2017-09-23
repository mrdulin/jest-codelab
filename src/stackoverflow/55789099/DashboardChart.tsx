import React, { Component } from 'react';
import getIntentsSince from './getIntentsSince';

const DateUtil = {
  getPreviousDayTS(datetime) {
    return datetime;
  }
};

interface IDashboardChartState {
  nowDateTime: string;
}

class DashboardChart extends Component<{}, IDashboardChartState> {
  constructor(props) {
    super(props);
    this.state = {
      nowDateTime: '2019'
    };
    this.getChart = this.getChart.bind(this);
  }

  public initializeCharts() {
    return getIntentsSince(this.state.nowDateTime, DateUtil.getPreviousDayTS(this.state.nowDateTime)).then(
      topIntents => {
        // I have to cover the code. Which is here
        console.log(topIntents);
      }
    );
  }

  public getChart() {
    this.setState({});
    this.initializeCharts();
  }
  public render() {
    return <button onClick={this.getChart}> get chart</button>;
  }
}

export default DashboardChart;
