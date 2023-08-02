import { useEffect, useState } from 'react';
import { fetchCryptoData } from '../../../utils/api';
import './styles/CryptoTable.css';


export default function CryptoTable() {
  const [cryptoData, setCryptoData] = useState([
    {
      id: '1',  
      name: 'Bitcoin',
      symbol: 'BTC', 
      price: '29,522', 
      percentChange24h: '2.39',
      marketCap: '555,555,555,555', 
      volume: '22,222,222,222', 
    },
    {
      id: '2',  
      name: 'Ethereum',
      symbol: 'ETH', 
      price: '1,850', 
      percentChange24h: '1.51',
      marketCap: '222,222,222,222', 
      volume: '7,777,777,777', 
    }
  ]);


  useEffect(() => {
    // fetchCryptoData();
  }, []);


  return (
    <div id='Crypto-table'>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>% Change (24h)</th>
            <th>Price Graph</th>
          </tr>
        </thead>
        <tbody>
          {
            cryptoData.map((crypto, index) => (
              <tr key={crypto.id}>
                <td>⭐</td>
                <td>{index}</td>
                <td>{crypto.name} ({crypto.symbol})</td>
                <td>{crypto.price}</td>
                <td>{crypto.percentChange24h}</td>
                <td>{crypto.marketCap}</td>
                <td>{crypto.volume}</td>
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
