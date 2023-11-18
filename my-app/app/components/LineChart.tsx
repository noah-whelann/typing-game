// components/LineChart.tsx
import React, { FC } from "react";
import { Line } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";

interface LineChartProps {
  chartData: ChartData<"line", any>;
}

const LineChart: FC<LineChartProps> = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "WPM over time",
            },
            legend: {
              display: false,
            },
          },
        } as ChartOptions}
      />
    </div>
  );
};

export default LineChart;
