export default [
  {id: 'cmc_rank', label: '#'},
  {id: 'name', label: 'Name', minWidth: 150},
  {
    id: 'price', 
    label: 'Price', 
    align: 'center',
    format: (value) => `$${value.toFixed(2)}`
  },
  {
    id: 'percent_change_1h', 
    label: '1h %', 
    minWidth: 70, 
    align: 'center',
    format: (value) => value.toFixed(2)
  },
  {
    id: 'percent_change_24h', 
    label: '24h %', 
    minWidth: 70, 
    align: 'center',
    format: (value) => value.toFixed(2)
  },
  {
    id: 'percent_change_7d', 
    label: '7d %', 
    minWidth: 70, 
    align: 'center',
    format: (value) => value.toFixed(2)
  },
  {
    id: 'market_cap', 
    label: 'Market Cap', 
    align: 'center',
    format: (value) => `$${value.toLocaleString('en-US')}`
  },
  {
    id: 'volume_24h', 
    label: 'Volume (24h)', 
    align: 'center', 
    format: (value) => `$${value.toLocaleString('en-US')}`
  },
  {
    id: 'circulating_supply',
    label: 'Circulating Supply', 
    align: 'center',
    format: (value) => `$${value.toLocaleString('en-US')}`
  }
];
