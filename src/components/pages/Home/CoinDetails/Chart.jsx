import { useEffect, useState } from "react";
import Alert from '@mui/material/Alert';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { fetchData } from '../../../../utils/api';
import Spinner from '../../../common/Spinner';
import { formatPrice } from '../../../../utils/numberFormat';


ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);


export default function Chart({slug}) {
  const [coinMarketData, setCoinMarketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const apiUrl = `https://api.coingecko.com/api/v3/coins/${slug}/market_chart?vs_currency=usd&days=1`;


  async function fetchCoinMarketData() {
    try {
      const data = await fetchData(apiUrl, 'prices', false);
      setCoinMarketData(data.filter((_, index) => index % 4 === 0));
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {fetchCoinMarketData()}, []);


  if(loading){
    return (
      <div className="spinner-ctr" style={{ marginTop: '60px' }}>
        <Spinner size='60px' />
      </div>
    );
  }


  if(error !== ''){
    return <Alert severity="error">{error}</Alert>;
  }


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
            pointRadius: 1.5,
          }
        ]
      }}
      options={{
        plugins: {
          legend: { display: false },
          title: { display: true, text: `${slug} to USD Chart` }
        },
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
