import { useEffect, useState } from "react";
import Alert from '@mui/material/Alert';
import { fetchData } from '../../../../utils/api';
import Spinner from '../../../common/Spinner';


export default function Chart({slug}) {
  const [coinMarketData, setCoinMarketData] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const apiUrl = ``;


  async function fetchCoinMarketData() {
    try {
      setCoinMarketData(await fetchData(apiUrl));
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


  // useEffect(() => {fetchCoinMarketData()}, []);


  // if(loading){
  //   return (
  //     <div className="spinner-ctr" style={{ marginTop: '60px' }}>
  //       <Spinner size='60px' />
  //     </div>
  //   );
  // }


  if(error !== ''){
    return <Alert severity="error">{error}</Alert>;
  }


  return (
    <div>
      Chart
    </div>
  );
};
