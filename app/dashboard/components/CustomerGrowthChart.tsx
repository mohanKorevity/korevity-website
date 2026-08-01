"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", customers: 42 },
  { month: "Feb", customers: 48 },
  { month: "Mar", customers: 55 },
  { month: "Apr", customers: 61 },
  { month: "May", customers: 68 },
  { month: "Jun", customers: 76 },
  { month: "Jul", customers: 82 },
  { month: "Aug", customers: 89 },
  { month: "Sep", customers: 95 },
  { month: "Oct", customers: 101 },
  { month: "Nov", customers: 108 },
  { month: "Dec", customers: 115 },
];

export default function CustomerGrowthChart() {
  return (
    <div className="h-full w-full">

      <ResponsiveContainer width="100%" height="100%">

        <LineChart data={data}>

          <CartesianGrid
            stroke="#1f2937"
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="month"
            tick={{ fill: "#94a3b8" }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{ fill: "#94a3b8" }}
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

          <Line
            type="monotone"
            dataKey="customers"
            stroke="#22d3ee"
            strokeWidth={3}
            dot={{ r: 4 }}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}