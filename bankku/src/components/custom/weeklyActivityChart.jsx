import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useMediaQuery } from 'react-responsive';


function WeeklyChart() {

  
const isXL = useMediaQuery({ minWidth: 1440 });
const isMD = useMediaQuery({ minWidth: 768 });

const barSize = isXL ? 15 : isMD ? 12 : 8;

const fontSize = isXL ? 13 : isMD ? 12 : 11;

  const barData = [
    { day: "Sat", Deposit: 500, Withdraw: 200 },
    { day: "Sun", Deposit: 300, Withdraw: 100 },
    { day: "Mon", Deposit: 500, Withdraw: 250 },
    { day: "Tue", Deposit: 200, Withdraw: 400 },
    { day: "Wed", Deposit: 300, Withdraw: 100 },
    { day: "Thu", Deposit: 400, Withdraw: 200 },
    { day: "Fri", Deposit: 350, Withdraw: 300 },
  ];
  const maxValue = Math.max(
    ...barData.map((d) => Math.max(d.Deposit, d.Withdraw))
  );
  const top = Math.ceil(maxValue / 100) * 100;
  const ticks = Array.from({ length: top / 100 + 1 }, (_, i) => i * 100);

  return (
    <div className="bg-white xl:pt-7 xl:pb-5 xl:pr-[31px] pt-[18px] pb-[10px] md:px-[22px] pr-0 rounded-xl  w-full xl:h-[332px] md:h-[261px] h-[254px] flex flex-col justify-start">
      <ResponsiveContainer width="100%">
        <BarChart data={barData} barGap="10%" barCategoryGap="25%">
          <CartesianGrid
            strokeDasharray="0"
            stroke="#F3F3F5"
            vertical={false}
          />
          <XAxis
            dataKey="day"
            tick={{ fontSize: fontSize, fill: "#718EBF" }}
            axisLine={false}
            tickLine={false}
            // margin={{ bottom: 16 }}
          />
          <YAxis
            tick={{ fontSize: fontSize, fill: "#718EBF" }}
            axisLine={false}
            tickLine={false}
            ticks={ticks}
            domain={[0, top]}
            margin={{ top: 0, right: 0, left: -70, bottom: 0 }}
            width={30}
            // padding={{ top: 10 }}
          />
          <Tooltip
            contentStyle={{ fontSize: fontSize }}
            cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
          />
          <Legend
            wrapperStyle={{
              fontSize: fontSize,
              fill: "#718EBF",
              // paddingBottom: 22,
            }}
            iconType="circle"
            align="right"
            verticalAlign="top"
            content={renderCustomizedLegend}
          />
          <Bar
            dataKey="Deposit"
            fill="#1814F3"
            radius={[10, 10, 10, 10]}
            minPointSize={3}
            barSize={barSize}
          />
          <Bar
            dataKey="Withdraw"
            fill="#16DBCC"
            radius={[10, 10, 10, 10]}
            minPointSize={10}
            barSize={barSize}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default WeeklyChart;

const renderCustomizedLegend = (props) => {
  const { payload } = props;

  return (
    <ul
      style={{
        display: "flex",
        justifyContent: "flex-end",
        paddingBottom: 22,
        margin: 0,
        paddingRight: 0,
      }}
    >
      {payload.map((entry, index) => (
        <li
          key={`item-${index}`}
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: index === payload.length - 1 ? 0 : "30px",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: entry.color,
              marginRight: 5,
            }}
          ></div>

          <span style={{ fontSize: 13, color: "#718EBF" }}>{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};
