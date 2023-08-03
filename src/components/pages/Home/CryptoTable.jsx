import { useEffect, useState } from 'react';
import { fetchData } from '../../../utils/api';
import Pct from '../../common/Pct';
import CoinLogo from '../../common/CoinLogo';
import Spinner from '../../common/Spinner'
// import './styles/CryptoTable.css';


export default function CryptoTable() {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';


  async function fetchLatest() {
    try {
      setCryptoData(await fetchData(apiUrl));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchLatest();
  }, []);


  if(loading){
    return (
      <div className="spinner-ctr" style={{ marginTop: '60px' }}>
        <Spinner size='60px' />
      </div>
    );
  }


  return (
    <div id='Crypto-table'>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>Volume (24h)</th>
            <th>Circulating Supply</th>
            <th>Price Graph</th>
          </tr>
        </thead>
        <tbody>
          {
            cryptoData && cryptoData !== [] &&
            cryptoData.map((crypto, index) => (
              <tr key={crypto.id}>
                <td>
                  ⭐
                </td>
                <td>{index + 1}</td>
                <td>
                  <CoinLogo symbol={crypto.symbol}/> {crypto.name} {crypto.symbol}
                </td>
                <td>
                  $ {crypto.quote.USD.price}
                </td>
                <td>
                  <Pct pct={crypto.quote.USD.percent_change_1h}/>
                </td>
                <td>
                  <Pct pct={crypto.quote.USD.percent_change_24h}/>
                </td>
                <td>
                  <Pct pct={crypto.quote.USD.percent_change_7d}/>
                </td>
                <td>
                  $ {crypto.quote.USD.market_cap}
                </td>
                <td>
                  $ {crypto.quote.USD.volume_24h}
                </td>
                <td>
                  {crypto.circulating_supply}
                </td>
                <td>
                  {/* The price graph */}
                </td>
              </tr>
            )) 
          }
        </tbody>
      </table>
    </div>
  );
};
