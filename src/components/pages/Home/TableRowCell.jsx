import Pct from '../../common/Pct';


export default function getTableRowCell({column, row}){
  const cellValue = row[column.id];
  const TableRowCellStyle = { 
    display: 'flex', 
    alignItems: 'center', 
    gap: '5px' 
  };
  

  function getPriceGraph(id){
    return `https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${id}.svg`;
  };
  function getCoinLogo(id){
    return `https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`;
  };


  switch (column.id) {
    case 'cmc_rank':
      return <p>{cellValue}</p>;
    case '':
      return <p>⭐️</p>;
    case 'price_graph':
      return <img src={getPriceGraph(row.id)} alt="price" loading='lazy' />;
    case 'name':
      return (
        <div style={TableRowCellStyle}>
          <div style={{ width: '24px', height: '24px' }}>
            <img className="bg-img" src={getCoinLogo(row.id)} alt="coin" loading='lazy' />
          </div>
          <p>{cellValue}</p>
          <span style={{ color: 'var(--text-gray)' }}>{row.symbol}</span> 
        </div>
      );
    case 'percent_change_1h': case 'percent_change_24h': case 'percent_change_7d':
      return <Pct pct={column.format(cellValue)} />;
    default:
      return <p>{column.format(cellValue)}</p>;
  };
};
