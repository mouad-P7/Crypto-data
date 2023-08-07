import Pct from '../../common/Pct';
import CoinLogo from '../../common/CoinLogo';


export default function getTableRowCell({column, row}){
  const cellValue = row[column.id];
  const TableRowCellStyle = { 
    textAlign: column.align, 
    display: 'flex', 
    alignItems: 'center', 
    gap: '5px' 
  };


  switch (column.id) {
    case 'cmc_rank':
      return <p style={{ textAlign: column.align }}>{cellValue}</p>;
    case '':
      return <p style={{ textAlign: column.align }}>⭐️</p>;
    case 'name':
      return (
        <div style={TableRowCellStyle}>
          <CoinLogo symbol={row.symbol}/>
          <p>{cellValue}</p>
          <span style={{ color: 'var(--text-gray)' }}>{row.symbol}</span> 
        </div>
      );
    case 'percent_change_1h': case 'percent_change_24h': case 'percent_change_7d':
      return <Pct pct={column.format(cellValue)} />;
    default:
      return <p style={{ textAlign: column.align }}>{column.format(cellValue)}</p>;
  };
};
