
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

// function Chart({ coinId} : ChartProps) {
//   const {isLoading, data} = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId));
//   return (
//     <div>
//       {isLoading ? (
//         "Loading chart..."
//       ) : (
//         <ApexChart
//           type="line"
//           //우리가 보내고 싶은 모든 데이터가 들어있다.
//           series={[
//             {
//               name: "Price",
//               data: data?.map((price) => Number(price.close)) ?? [],
//             },
//           ]}
//           options={{
//             theme: {
//               mode: "dark",
//             },
//             chart: {
//               height: 300,
//               width: 500,
//               //툴바(다운로드, svg...) 옵션
//               toolbar: {
//                 show: false,
//               },
//               background: "transparent",
//             },
//             //그리드 옵션
//             grid: { show: false },
//             //선 옵션
//             stroke: {
//               curve: "smooth",
//               width: 4,
//             },
//             //y축 옵션
//             yaxis: {
//               show: false,
//             },
//             //x축 옵션
//             xaxis: {
//               axisBorder: { show: false },
//               axisTicks: { show: false },
//               labels: { show: false },
//             },
//           }}
//         />
//       )}
//     </div>
//   );
// }
  
// export default Chart;