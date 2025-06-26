"use client";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { useMediaQuery } from 'react-responsive';

function BalanceHistory() {
  const data = [
    { week: "Week 1", balance: 120, month: "Jul" },
    { week: "Week 2", balance: 230, month: "Jul" },
    { week: "Week 3", balance: 330, month: "Jul" },
    { week: "Week 4", balance: 280, month: "Jul" },
    { week: "Week 1", balance: 230, month: "Aug" },
    { week: "Week 2", balance: 210, month: "Aug" },
    { week: "Week 3", balance: 400, month: "Aug" },
    { week: "Week 4", balance: 480, month: "Aug" },
    { week: "Week 1", balance: 430, month: "Sep" },
    { week: "Week 2", balance: 405, month: "Sep" },
    { week: "Week 3", balance: 600, month: "Sep" },
    { week: "Week 4", balance: 750, month: "Sep" },
    { week: "Week 1", balance: 790, month: "Oct" },
    { week: "Week 2", balance: 700, month: "Oct" },
    { week: "Week 3", balance: 550, month: "Oct" },
    { week: "Week 4", balance: 400, month: "Oct" },
    { week: "Week 1", balance: 205, month: "Nov" },
    { week: "Week 2", balance: 320, month: "Nov" },
    { week: "Week 3", balance: 550, month: "Nov" },
    { week: "Week 4", balance: 590, month: "Nov" },
    { week: "Week 1", balance: 550, month: "Dec" },
    { week: "Week 2", balance: 400, month: "Dec" },
    { week: "Week 3", balance: 280, month: "Dec" },
    { week: "Week 4", balance: 220, month: "Dec" },
    { week: "Week 1", balance: 250, month: "Jan" },
    { week: "Week 2", balance: 400, month: "Jan" },
    { week: "Week 3", balance: 600, month: "Jan" },
    { week: "Week 4", balance: 630, month: "Jan" },
    { week: "Week 1", balance: 600, month: "Feb" },
  ];

  const isXL = useMediaQuery({ minWidth: 1440 });
const isMD = useMediaQuery({ minWidth: 768 });
const fontSize = isXL ? 13 : isMD ? 12 : 11;

  return (
    <div className="w-full min-h-[223px] md:h-full xl:pr-[25px] xl:pt-[30px] xl:pb-6 md:px-4 md:pt-5 md:pb-4 rounded-[25px] bg-white pt-[18px] pb-[10px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2D60FF80" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#2D60FF80" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={true} />
          <XAxis
            dataKey="month"
            interval={3}
            strokeDasharray="3 3"
            tick={{ fontSize: fontSize, fill: "#718EBF" }}
        
          />
          <YAxis  
            strokeDasharray="3 3" 
            tick={{ fontSize: fontSize, fill: "#718EBF" }}
            margin={{ top: 0, right: 0, left: -70, bottom: 0 }}
            width={30}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="balance"
            stroke="#1814F3"
            fillOpacity={1}
            fill="url(#colorBalance)"
            strokeWidth={3}
            
          />
         
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BalanceHistory;
