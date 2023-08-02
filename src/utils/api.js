export async function fetchCryptoData(apiUrl){
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch(error) {
    console.error('Error fetching data: ', error);
  }
};
