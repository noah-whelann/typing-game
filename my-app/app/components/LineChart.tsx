// components/LineChart.tsx
import React, { FC } from "react";
import { Line, ChartData } from "chart.js";

interface LineChartProps {
  chartData: ChartData;
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
              text: "WPM over time"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};

export default LineChart;
