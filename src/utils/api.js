const apiKey = '75288f73-da84-46f4-8300-e1e3da779244';
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';


export async function fetchData(apiUrl){
  try {
    const response = await fetch(proxyUrl + apiUrl, {
      headers: {'X-CMC_PRO_API_KEY': apiKey}
    });
    if (!response.ok) throw new Error('Network response was not ok');
    const jsonData = await response.json()
    return jsonData.data;
  } catch(error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};

