import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

const marks = [
  { name: "Assign. 1", mark: 60 },
  { name: "Assign. 2", mark: 60 },
  { name: "Assign. 3", mark: 60 },
  { name: "Assign. 4", mark: 48 },
  { name: "Assign. 5", mark: 60 },
  { name: "Assign. 6", mark: 60 },
  { name: "Assign. 7", mark: 60 },
  { name: "Assign. 8", mark: 60 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const Statisctics = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 min-h-[450px] my-10 text-center overflow-hidden">
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis dataKey="mark" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="A school" data={marks} fill="#8884d8">
            {marks.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Scatter>
          <Tooltip></Tooltip>
        </ScatterChart>
      </ResponsiveContainer>
      <span className="font-bold text-lg text-indigo-600 pb-1 border-b-2 border-black">
        Charts : Assignment Marks
      </span>
    </div>
  );
};

export default Statisctics;
