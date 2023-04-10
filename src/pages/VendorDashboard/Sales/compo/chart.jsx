/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto';

const ChartGraph = ({ chartData }) => {
  const labels = chartData.map((item) =>
    new Date(item.created).toLocaleDateString()
  );
  const earnings = chartData.map((item) => item.amount);
  const chartdata = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: earnings,
        fill: false,
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
        tension: 0.1,
      },
    ],
  };

  return <Line data={chartdata}/>;
};

export default ChartGraph;
