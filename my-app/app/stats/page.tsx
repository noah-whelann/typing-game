import React from 'react';
import LineChart from '../components/LineChart';

const dummyData = [
  { date: '2022-01-01', wpm: 50, accuracy: 80 },
  { date: '2022-01-02', wpm: 60, accuracy: 90 },
  { date: '2022-01-03', wpm: 45, accuracy: 75 },
  { date: '2022-01-04', wpm: 70, accuracy: 85 },
  { date: '2022-01-05', wpm: 40, accuracy: 95 },
];

const Stats = () => {
  const chartData = {
    labels: dummyData.map((d) => d.date),
    datasets: [
      {
        label: 'WPM over time',
        data: dummyData.map((d) => d.wpm),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <LineChart chartData={chartData} />
    </div>
  );
};

export default Stats;
