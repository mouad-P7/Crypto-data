import Image from 'next/image';
import Pct from '@ui/common/Pct';


export default function getTableRowCell({column, row}){
  const cellValue = row[column.id];
  

  function getPriceGraph(id){
    return `https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${id}.svg`;
  };


  switch (column.id) {
    case '':
      return <p>⭐️</p>;
    case 'cmc_rank':
      return <p>{cellValue}</p>;
    case 'name':
      return (
        <div className="flex items-center gap-5">
          <Image src={row.img} alt="coin" width={24} height={24} />
          <p>{cellValue}</p>
          <span className="text-textGray">{row.symbol}</span> 
        </div>
      );
    case 'price':
      return <p>{column.format(cellValue)}</p>;
    case 'percent_change_1h': case 'percent_change_24h': case 'percent_change_7d':
      return <Pct pct={column.format(cellValue)} />;
    case 'market_cap': case 'volume_24h': case 'circulating_supply':
      return <p>{column.format(cellValue)}</p>;
    case 'price_graph':
      // return <Image src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg" alt="price" />;
    default:
      return <p>?</p>;
  };
};
