import ApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";

interface ChartProps {
  coinId: string;
}

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart({ coinId} : ChartProps) {
  const {isLoading, data} = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId));
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((price) => Number(price.close)) ?? [],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
              type: "datetime",
              categories: data?.map(price => new Date(Number(price.time_close) * 1000).toUTCString()),
            },
            fill:{
              type: "gradient",
              gradient: { gradientToColors: ["#799be0"], stops: [0, 80]},
            },
            colors: ["#20ccc6"],
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`,
              }
            }
          }}
        />
      )}
    </div>
  );
}
  
export default Chart;