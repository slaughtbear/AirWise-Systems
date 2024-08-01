import { AreaChart } from "@tremor/react";
import {Card} from "@nextui-org/card";

const chartdata = [
  {
    date: "Jan 23",
    Temperatura: 23,
    Humedad: 45,
    CO2: 400,
    Humo: 10,
  },
  {
    date: "Feb 23",
    Temperatura: 25,
    Humedad: 50,
    CO2: 420,
    Humo: 12,
  },
  {
    date: "Mar 23",
    Temperatura: 20,
    Humedad: 55,
    CO2: 450,
    Humo: 8,
  },
  {
    date: "Apr 23",
    Temperatura: 22,
    Humedad: 48,
    CO2: 430,
    Humo: 9,
  },
  {
    date: "May 23",
    Temperatura: 24,
    Humedad: 53,
    CO2: 410,
    Humo: 11,
  },
  {
    date: "Jun 23",
    Temperatura: 26,
    Humedad: 47,
    CO2: 440,
    Humo: 10,
  },
];

export function AreaChartSensors() {
  return (
    <div className="bg-stone-950 min-h-screen p-4 flex justify-center items-center">
      <Card className="bg-stone-900 w-full max-w-5xl p-4">
      <AreaChart
          className="h-72 w-full"
          data={chartdata}
          index="date"
          categories={["Temperatura", "Humedad", "CO2", "Humo"]}
          colors={["blue", "purple", "green", "red"]}
          yAxisWidth={40}
        />
      </Card>
    </div>
  );
}
