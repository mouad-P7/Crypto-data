import CryptoTable from '@ui/pages/app/CryptoTable';


async function fetchCryptoData() {
  const coinGechoApi = "https://api.coingecko.com/api/v3";
  const response = await fetch(`${coinGechoApi}/coins/markets?vs_currency=usd&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`);
  if(!response.ok) throw new Error("Failed to fetch data");
  const jsonData = await response.json();
  return jsonData;
};


export default async function App() {
  const cryptoData = await fetchCryptoData();
  

  return (
    <div className="p-15px">
      <div className="py-20px">
        <CryptoTable data={cryptoData} />
      </div>
    </div>
  );
};
