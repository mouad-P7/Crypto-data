import { useEffect, useState } from "react";
import Alert from '@mui/material/Alert';
import { fetchData } from '../../../../../utils/api';
import Spinner from '../../../../common/Spinner';
import Button from '../../../../common/Button';
import { ChartLine } from "../../../../common/Icons";
import CoinChart from "./CoinChart";
import "./styles/Chart.css";


export default function Chart({slug}) {
  const [coinMarketData, setCoinMarketData] = useState([]);
  const [range, setRange] = useState('1');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const apiUrl = `https://api.coingecko.com/api/v3/coins/${slug}/market_chart?vs_currency=usd&days=${range}`;


  function handleRangeChange(event) {
    setLoading(true);
    setRange(event.target.value);
  };


  async function fetchCoinMarketData() {
    try {
      const data = await fetchData(apiUrl, 'prices', false);
      setCoinMarketData(data.filter((_, index) => index % 10 === 0));
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchCoinMarketData();
  }, [range]);


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
    <>
      <div className="top-of-chart-ctr">
        <Button onClick={() => window.open(`https://www.tradingview.com/symbols/BTCUSD`, '_blank')}>
          <ChartLine /> Trading View
        </Button>
        <div className="radio-inputs">
          <label className="radio">
            <input 
              type="radio" name="range" value="1" checked={range === "1"}
              onChange={handleRangeChange}
            />
            <span className="range">1D</span>
          </label>
          <label className="radio">
            <input 
              type="radio" name="range" value="14" checked={range === "14"}
              onChange={handleRangeChange}
            />
            <span className="range">7D</span>
          </label>
          <label className="radio">
            <input 
              type="radio" name="range" value="30" checked={range === "30"}
              onChange={handleRangeChange}
            />
            <span className="range">1M</span>
          </label>
          <label className="radio">
            <input 
              type="radio" name="range" value="max" checked={range === "max"}
              onChange={handleRangeChange}
            />
            <span className="range">ALL</span>
          </label>
        </div>
      </div>
      <CoinChart coinMarketData={coinMarketData} />
    </>
  );
};
