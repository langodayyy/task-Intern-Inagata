import React from "react";
import {
  PieChart,
  Tooltip,
  Pie,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useMediaQuery } from "react-responsive";

const data = [
  { name: "Bill Expense", value: 150, radius: 150, color: "#FC7900" },
  { name: "Entertainment", value: 300, radius: 130, color: "#343C6A" },
  { name: "Investment", value: 200, radius: 115, color: "#FA00FF" },
  { name: "Others", value: 350, radius: 130, color: "#1814F3" },
];

const RADIAN = Math.PI / 180;
const total = data.reduce((sum, d) => sum + d.value, 0);

const getResponsiveRadius = (baseRadius) => {
  const width = window.innerWidth;
  if (width >= 1440) return baseRadius;            // XL
  if (width >= 768) return baseRadius * 0.68;       // MD
  return baseRadius * 0.7;                          // SM
};

const renderLabel = (fontSize, radiusOffset) =>
  ({ cx, cy, midAngle, outerRadius, payload }) => {
    const x =
      cx + (outerRadius - radiusOffset) * Math.cos(-midAngle * RADIAN);
    const y =
      cy + (outerRadius - radiusOffset) * Math.sin(-midAngle * RADIAN);
    const percent = ((payload.value / total) * 100).toFixed(0);

    return (
      <text
        x={x}
        y={y}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={fontSize}
      >
        <tspan x={x} dy="-0.7em" fontSize={fontSize} fontWeight="semibold">
          {`${percent}%`}
        </tspan>
        <tspan x={x} dy="1.2em" fontSize={fontSize} fontWeight="semibold">
          {payload.name}
        </tspan>
      </text>
    );
  };

export default function CustomPieChart() {
  let startAngle = 0;
  
  const isXL = useMediaQuery({ minWidth: 1440 });
  const isMD = useMediaQuery({ minWidth: 768 });
  const fontSize = isXL ? 16 : isMD ? 12 : 12;
  const radiusOffset = isXL ? 36 : isMD ? 30 : 30;
  const offsetDistance = isXL ? 9 : isMD ? 6 : 6;

  return (
    <div className="xl:h-[332px] md:h-[261px] h-[240px] w-full flex justify-center items-center ">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              // borderRadius: "8px",
              fontSize: fontSize,
              padding: "10px",
              // color: "#333",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
            formatter={(value, name) => [`${value}`, name]}
          />

          {data.map((entry, index) => {
            const sliceAngle = (entry.value / total) * 360;
            const midAngle = startAngle + sliceAngle / 2;
            const dx = offsetDistance * Math.cos(-midAngle * RADIAN);
            const dy = offsetDistance * Math.sin(-midAngle * RADIAN);
            const endAngle = startAngle + sliceAngle;

            const pieProps = {
              data: [entry],
              dataKey: "value",
              cx: "50%",
              cy: "50%",
              startAngle,
              endAngle,
              outerRadius: getResponsiveRadius(entry.radius),
              innerRadius: 0,
              labelLine: false,
              label: renderLabel( fontSize, radiusOffset), // ✅ di-inject dari atas
              isAnimationActive: true,
              animationDuration: 800,
              animationEasing: "ease-out",
            };

            startAngle = endAngle;

            return (
              <Pie key={index} {...pieProps}>
                <Cell
                  fill={entry.color}
                  stroke="#fff"
                  strokeWidth={0}
                  transform={`translate(${dx}, ${dy})`}
                />
              </Pie>
            );
          })}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
