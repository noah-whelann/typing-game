'use client'
import React, { FC } from "react";
import { Line } from "react-chartjs-2";
import 'chart.js/auto';

interface LineChartProps {
  chartData: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
    }[];
  };
}

const LineChart: FC<LineChartProps> = ({ chartData }) => {
  if (!Array.isArray(chartData.datasets)) {
    // Handle the case where chartData.datasets is not an array or is empty
    return <div>No data available for the chart.</div>;
  }

  const data = {
    labels: chartData.labels,
    datasets: chartData.datasets.map(dataset => ({
      label: dataset.label,
      data: dataset.data,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    })),
  };

  const options = {
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        type: 'linear',
        title: {
          display: true,
          text: 'WPM',
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'WPM over time',
      },
      legend: {
        display: false,
      },
    },
  } as any;

  return (
    <div className="chart-container">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
