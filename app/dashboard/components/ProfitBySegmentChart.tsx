"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { segment: "Consumer", profit: 134000 },
  { segment: "Corporate", profit: 92000 },
  { segment: "Home Office", profit: 60000 },
];

export default function ProfitBySegmentChart() {
  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{
  top: 10,
  right: 20,
  left: 40,
  bottom: 10,
}}
        >
          <XAxis
            type="number"
            stroke="#94a3b8"
          />

          <YAxis
  dataKey="segment"
  type="category"
  stroke="#94a3b8"
  width={110}
/>

          <Tooltip />

          <Bar
            dataKey="profit"
            radius={[0, 8, 8, 0]}
            fill="#22d3ee"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}