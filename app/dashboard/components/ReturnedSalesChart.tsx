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
  { category: "Technology", returned: 118 },
  { category: "Furniture", returned: 82 },
  { category: "Office Supplies", returned: 41 },
];

export default function ReturnedSalesChart() {
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
  dataKey="category"
  type="category"
  stroke="#94a3b8"
  width={120}

/>

          <Tooltip />

          <Bar
            dataKey="returned"
            radius={[0, 8, 8, 0]}
            fill="#3b82f6"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}