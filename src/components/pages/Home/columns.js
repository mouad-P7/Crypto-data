const priceFormatter = new Intl.NumberFormat('en-us', { 
  style: 'currency', currency: 'USD', minimumFractionDigits: 9
});
const compactPriceFormatter = new Intl.NumberFormat('en-us', { 
  style: 'currency', currency: 'USD', notation: 'compact' 
});
const compactNumFormatter = new Intl.NumberFormat('en-us', { 
  notation: 'compact' 
});


function formatPrice(value){
  if (Math.abs(value) < 0.001) return priceFormatter.format(value);
  else return `$${value.toFixed(2)}`;
};


export default [
  {id: '', label: ''},
  {id: 'cmc_rank', label: '#'},
  {id: 'name', label: 'Name', minWidth: 170},
  {
    id: 'price', 
    label: 'Price', 
    align: 'center',
    format: (value) => formatPrice(value)
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
    minWidth: 125,  
    align: 'center',
    format: (value) => compactPriceFormatter.format(value)
  },
  {
    id: 'volume_24h', 
    label: 'Volume (24h)', 
    minWidth: 125, 
    align: 'center', 
    format: (value) => compactPriceFormatter.format(value)
  },
  {
    id: 'circulating_supply',
    label: 'Circulating Supply',
    minWidth: 155,  
    align: 'center',
    format: (value) => compactNumFormatter.format(value)
  }
];
