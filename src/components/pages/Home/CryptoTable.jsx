import { useEffect, useState } from 'react';
import { fetchData } from '../../../utils/api';
import Spinner from '../../common/Spinner'
import CoinsTable from './CoinsTable';


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


  useEffect(() => {fetchLatest()}, []);


  if(loading){
    return (
      <div className="spinner-ctr" style={{ marginTop: '60px' }}>
        <Spinner size='60px' />
      </div>
    );
  }


  return (
    <div id='Crypto-table' style={{padding: '20px 0px'}}>
      <CoinsTable data={cryptoData} />
    </div>
  );
};
