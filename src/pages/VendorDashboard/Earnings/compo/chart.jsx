/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";

const ChartGraph = (props) => {
  const chartData = {
    labels: props.labels,
    datasets: [
      {
        label: props.title,
        data: props.data,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.4)",
        fill: true,
      },
    ],
  };

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

  return <Line data={chartData} options={chartOptions} />;
};

export default ChartGraph;
