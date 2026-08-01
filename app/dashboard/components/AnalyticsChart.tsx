"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", sales: 90 },
  { month: "Feb", sales: 120 },
  { month: "Mar", sales: 110 },
  { month: "Apr", sales: 145 },
  { month: "May", sales: 168 },
  { month: "Jun", sales: 155 },
  { month: "Jul", sales: 182 },
  { month: "Aug", sales: 198 },
  { month: "Sep", sales: 191 },
  { month: "Oct", sales: 215 },
  { month: "Nov", sales: 228 },
  { month: "Dec", sales: 245 },
];

export default function AnalyticsChart() {
  return (
    <div
      style={{
        width: "100%",
        height: 500,
        background: "#111827",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
            <defs>
  <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.45} />
    <stop offset="60%" stopColor="#22d3ee" stopOpacity={0.12} />
    <stop offset="100%" stopColor="#22d3ee" stopOpacity={0} />
  </linearGradient>

  <filter id="glow">
    <feGaussianBlur stdDeviation="6" result="coloredBlur" />
    <feMerge>
      <feMergeNode in="coloredBlur" />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>
</defs>

<CartesianGrid
  stroke="#1f2937"
  vertical={false}
  strokeDasharray="4 4"
/>

<XAxis
  dataKey="month"
  tick={{ fill: "#64748b", fontSize: 13 }}
  axisLine={false}
  tickLine={false}
/>

<YAxis
  tick={{ fill: "#64748b", fontSize: 13 }}
  axisLine={false}
  tickLine={false}
/>

<Tooltip
  cursor={{
    stroke: "#22d3ee",
    strokeOpacity: 0.2,
  }}
  contentStyle={{
    background: "#0f172a",
    border: "1px solid rgba(34,211,238,.2)",
    borderRadius: "14px",
    color: "#fff",
  }}
/>

<Area
  type="natural"
  dataKey="sales"
  stroke="none"
  fill="url(#salesGradient)"
/>

<Line
  type="natural"
  dataKey="sales"
  stroke="#22d3ee"
  strokeWidth={4}
  filter="url(#glow)"
  dot={{
    r: 4,
    fill: "#22d3ee",
    stroke: "#fff",
    strokeWidth: 2,
  }}
  activeDot={{
    r: 7,
    fill: "#22d3ee",
    stroke: "#fff",
    strokeWidth: 2,
  }}
/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}