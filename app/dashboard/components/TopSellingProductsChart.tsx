"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Laptop", sales: 245000 },
  { name: "Monitor", sales: 198000 },
  { name: "Printer", sales: 172000 },
  { name: "Keyboard", sales: 148000 },
  { name: "Mouse", sales: 126000 },
];

export default function TopSellingProductsChart() {
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid
            stroke="#1f2937"
            horizontal={false}
          />

          <XAxis
            type="number"
            tick={{ fill: "#94a3b8" }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            type="category"
            dataKey="name"
            tick={{ fill: "#cbd5e1" }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{
              background: "#0f172a",
              border: "1px solid #1e293b",
              borderRadius: "12px",
            }}
          />

          <Bar
            dataKey="sales"
            fill="#22d3ee"
            radius={[0, 8, 8, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}