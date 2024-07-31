'use client';
import { Pie, PieChart } from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
const chartData = [
  { browser: 'sales', Visitors: 275, fill: 'rgb(88,116,199)' },
  { browser: 'Jan', visitors: 200, fill: '#91a8ff' },
  { browser: 'Feb', visitors: 187, fill: '#74a6ff' },
  { browser: 'March', visitors: 173, fill: '#3a5bab' },
  { browser: 'April', visitors: 90, fill: '#002e76' },
  { browser: 'May', visitors: 90, fill: '#abc0ff' },
  { browser: 'June', visitors: 90, fill: 'rgb(88,116,199)' },
];

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  Jan: {
    label: 'Jan',
    color: 'rgb(88,116,200)',
  },
} satisfies ChartConfig;

export function DoughnutChart() {
  return (
    <Card className="flex flex-col flex-1">
      <CardHeader className="items-start pb-0">
        <CardTitle className="text-gray-500 text-xl">Sales</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
