import { useEffect, useState } from "react";
import Alert from '@mui/material/Alert';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { fetchData } from '../../../../utils/api';
import Spinner from '../../../common/Spinner';


ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


export default function Chart({slug}) {
  const [coinMarketData, setCoinMarketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const apiUrl = `https://api.coingecko.com/api/v3/coins/${slug}/market_chart?vs_currency=usd&days=1`;


  async function fetchCoinMarketData() {
    try {
      setCoinMarketData(await fetchData(apiUrl, 'prices', false));
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
      data={{
        labels: coinMarketData.map(item => item[0]),
        datasets: [
          {
            data: coinMarketData.map(item => item[1])
          }
        ]
      }}
      options={{
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: true, text: `${slug} to USD Chart` }
        }
      }}
    />
  );
};
