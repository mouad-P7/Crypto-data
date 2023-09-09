export function removePlusOrMinus(number){
  if(typeof number === 'number' || !isNaN(Number(number)))
    return String(Number(number));
  else 
    return number;
};
