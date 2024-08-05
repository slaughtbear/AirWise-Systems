import { AreaChart } from "@tremor/react";
import {Card} from "@nextui-org/card";

const chartdata = [
  {
    date: "May 25",
    Temperatura: 30,
    Humedad: 20,
    CO2: 0,
  },
  {
    date: "Jun 01",
    Temperatura: 32,
    Humedad: 15,
    CO2: 100,
  },
  {
    date: "Jul 15",
    Temperatura: 35,
    Humedad: 10,
    CO2: 100,
  },
  {
    date: "Aug 03",
    Temperatura: 33,
    Humedad: 20,
    CO2: 100,
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
          categories={["Temperatura", "Humedad", "CO2"]}
          colors={["red", "blue", "green"]}
          yAxisWidth={40}
        />
      </Card>
    </div>
  );
}
