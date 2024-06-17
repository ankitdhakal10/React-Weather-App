

export const getDataForCity = async (city) => {

  const baseURL = "https://api.weatherapi.com/v1/current.json?key=188e13f822fd40e88c9193055241606";
  
const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
return await response.json();
}

export const getDataForLocation = async (lat,long) => {

  const baseURL = "https://api.weatherapi.com/v1/current.json?key=188e13f822fd40e88c9193055241606";
  
const response = await fetch(`${baseURL}&q=${lat},${long}&aqi=yes`);
return await response.json();
}