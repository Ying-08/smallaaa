import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const HorizontalBarChart = () => {
  // 这里可以设置你的数据
  const data = [
    { name: "电控组", value1: 0.2, value2: 0.8 },
    { name: "机械组", value1: 0.4, value2: 0.3 },
    { name: "后台组", value1: 0.1, value2: 0.2 },
    { name: "前端组", value1: 0.7, value2: 0.5 },
    { name: "AI组", value1: 0.8, value2: 0.1 },
    { name: "传媒组", value1: 0.6, value2: 0.7 },
    { name: "管理组", value1: 0.5, value2: 0.6 },
  ];

  return (
    <BarChart
      width={400}
      height={300}
      data={data}
      layout="vertical"
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      {/* 在图表中绘制网格线 */}
      <CartesianGrid horizontal={false} strokeDasharray="3 3" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" />
      <Tooltip />
      <Legend />
      <Bar dataKey="value1" fill="#8884d8" />
      <Bar dataKey="value2" fill="#5087EC" />
    </BarChart>
  );
};

export default HorizontalBarChart;
