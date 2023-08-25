export function formatPrice(value){
  if (Math.abs(value) < 0.001) 
    return new Intl.NumberFormat('en-us', { 
      style: 'currency', currency: 'USD', minimumFractionDigits: 9
    }).format(value);
  else 
    return `$${value.toFixed(2)}`;
};


export function formatCompactPrice(value){
  return new Intl.NumberFormat('en-us', { 
    style: 'currency', currency: 'USD', notation: 'compact' })
    .format(value);
};


export function formatCompactNumber(value){
  return new Intl.NumberFormat('en-us', { notation: 'compact' }).format(value);
};
