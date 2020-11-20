import React, { Component } from 'react';

import Chart from 'react-google-charts';

export default class Charts extends Component {
  render() {
    const { region } = this.props;
    return (
      <Chart
        width={'600px'}
        height={'400px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={region}
        // {[
        //   ['Task', 'Hours per Day'],
        //   ['Work', 11],
        //   ['Eat', 2],
        //   ['Commute', 2],
        //   ['Watch TV', 2],
        //   ['Sleep', 7],
        // ]}
        options={{
          title: 'Continentes',
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    );
  }
}
