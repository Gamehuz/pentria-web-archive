/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto';

const ChartGraph = ({ chartData}) => {

  const chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return <Line data={chartData} />;
};

export default ChartGraph;
