import { useEffect, useState } from 'react'
import "./App.css"
import Card from './Components/Card'
import Input from './Components/Input'
import Button from './Components/Button'
import { useWeather } from './Context/Context'

function App() {
  
  const weather = useWeather();
  console.log(weather);


  useEffect(()=>{
    weather.fetchCurrUserLocation();
    },[])

  return (
    <div className='app'>
      <h1>Weather Forecast</h1>

    <Input />

    <Button 
    onClick={weather.fetchData} 
    value="search" />
    
    <Card />
    
    </div>
  )
}

export default App
