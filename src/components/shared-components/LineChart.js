import React from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import './style.css'

const LineChart = ({ data }) => {
  const options = {
    title: '',
    xAxis: {
      title: {
        text: 'ID'
      },
      labels: {
        rotation: -90
      },
      className: 'line-chart axis',
      categories: data.map(d => (d.story_id)),

    },
    yAxis: {
      title: {
        text: 'VOTES'
      },
      className: 'line-chart axis'
    },
    series: [{
      data: data.map(d => (d.points))
    }]
  };

  return (
    <div className="line-chart">
      <HighchartsReact data-testid={'lineChart'} highcharts={Highcharts} options={options} />
    </div >
  );
};

LineChart.propTypes = {
  options: PropTypes.object
}

export default LineChart;
