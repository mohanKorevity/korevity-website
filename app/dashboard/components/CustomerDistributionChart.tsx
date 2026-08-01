"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const data = [
  { name: "Consumer", value: 54 },
  { name: "Corporate", value: 29 },
  { name: "Home Office", value: 17 },
];

const COLORS = [
  "#22d3ee",
  "#38bdf8",
  "#6366f1",
];

export default function CustomerDistributionChart() {
  return (
    <div className="w-full h-full">

      <ResponsiveContainer width="100%" height="100%">

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={75}
            outerRadius={110}
            paddingAngle={4}
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}