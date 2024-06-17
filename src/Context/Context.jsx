import React, { createContext, useContext, useState } from 'react'
import { getDataForCity, getDataForLocation } from '../api';

export const WeatherContext = createContext(null);

export const useWeather = ()=> {
  return useContext(WeatherContext)
}

export const WeatherProvider = (props)=> {
  
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState('');

  const fetchData = async ()=> {
    const response = await getDataForCity(searchCity);
    setData(response);
  }

  const fetchCurrUserLocation = ()=> {
    navigator.geolocation.getCurrentPosition((position)=> {
     getDataForLocation(position.coords.latitude, position.coords.longitude)
     .then((data)=> setData(data));
    })
  }

   return (
  <WeatherContext.Provider value={{searchCity, data, setSearchCity, fetchData, fetchCurrUserLocation}}>
  {props.children}
</WeatherContext.Provider>
    )
}

