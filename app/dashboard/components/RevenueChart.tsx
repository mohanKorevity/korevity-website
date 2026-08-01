"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const data = [
  {
    month: "Jan",
    revenue: 120,
  },
  {
    month: "Feb",
    revenue: 180,
  },
  {
    month: "Mar",
    revenue: 150,
  },
  {
    month: "Apr",
    revenue: 240,
  },
  {
    month: "May",
    revenue: 280,
  },
  {
    month: "Jun",
    revenue: 245,
  },
];


export default function RevenueChart() {


  return (

    <div
      className="
        rounded-3xl

        border
        border-white/10

        bg-slate-900/60

        p-6

        backdrop-blur-xl
      "
    >


      <div
        className="
          mb-6
        "
      >

        <h3
          className="
            text-xl
            font-bold
            text-white
          "
        >
          Revenue Performance
        </h3>


        <p
          className="
            mt-2
            text-sm
            text-slate-400
          "
        >
          Monthly revenue growth overview.
        </p>


      </div>




      <div
        className="
          h-[320px]
          w-full
        "
      >

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart
            data={data}
          >

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.08)"
            />


            <XAxis
              dataKey="month"
              stroke="#94a3b8"
            />


            <YAxis
              stroke="#94a3b8"
            />


            <Tooltip
              contentStyle={{
                backgroundColor:"#020617",
                border:"1px solid rgba(255,255,255,0.1)",
                borderRadius:"12px",
              }}
            />



            <Line

              type="monotone"

              dataKey="revenue"

              stroke="#22d3ee"

              strokeWidth={3}

              dot={{
                r:5,
              }}

            />


          </LineChart>


        </ResponsiveContainer>


      </div>



    </div>

  );

}