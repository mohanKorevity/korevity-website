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
  { name: "Acme", sales: 148000 },
  { name: "Global", sales: 132000 },
  { name: "Vertex", sales: 118000 },
  { name: "Nova", sales: 101000 },
  { name: "Zenith", sales: 94000 },
];

export default function TopCustomersChart() {
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