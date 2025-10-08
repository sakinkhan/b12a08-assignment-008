import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const RatingChart = ({ singleAppData }) => {
  const ratings = singleAppData?.ratings || [];
  return (
    <div>
      <div className="h-[256px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={ratings}
            layout="vertical"
            margin={{ top: 10, right: 30, left: 10, bottom: 0 }}
          >
            <XAxis type="number"></XAxis>
            <YAxis dataKey="name" type="category" reversed></YAxis>
            <Tooltip></Tooltip>
            <Bar dataKey="count" fill="#FF8811" barSize={20}></Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RatingChart;
