import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { CarChart } from "../types/carChart";
import { ExcludeId } from "../types/utils";

export interface ChartProps {
  data?: ExcludeId<CarChart>[keyof ExcludeId<CarChart>];
  areaColor?: string;
  unit: string;
}

const Chart = ({ data, areaColor = "#999", unit }: ChartProps) => {
  const chartData = data?.map((datum) => ({
    이름: datum[0],
    연비: datum[1],
  }));

  return (
    <AreaChart width={600} height={350} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="이름"
        domain={["dataMin", "dataMax"]}
        type="number"
        tickFormatter={(value) => value + unit}
      />
      <YAxis type="number" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="연비"
        stroke={areaColor}
        fill={areaColor}
      />
    </AreaChart>
  );
};

export default Chart;
