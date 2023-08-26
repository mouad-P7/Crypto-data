import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { formatPrice } from '../../../../../utils/numberFormat';


ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);


export default function CoinChart({coinMarketData}) {
  return (
    <Line
      style={{ width: '100%', height: '100%' }}
      data={{
        labels: coinMarketData.map(item => item[0]),
        datasets: [
          {
            data: coinMarketData.map(item => item[1]),
            fill: true,
            borderColor: "#3861fb",
            borderWidth: 1.5,
            pointRadius: 0.5,
          }
        ]
      }}
      options={{
        plugins: { legend: { display: false } },
        scales: {
          x: {
            ticks: {
              maxTicksLimit: 4,
              callback: function(value, index, ticks) {
                return new Date(value).toLocaleString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true
                });
              }
            }
          },
          y: {
            ticks: {
              callback: function(value, index, ticks) {
                return formatPrice(value);
              }
            }
          }  
        }
      }}
    />
  );
};
