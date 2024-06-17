import React from 'react'
import { useWeather } from '../Context/Context'

function Input() {
  const weather =  useWeather();

  return (
  <input 
  className='input-field'
  value={weather.searchCity} 
  onChange={(event)=> weather.setSearchCity(event.target.value)} 
  placeholder="Enter city" 
  type="text" />
  )
}

export default Input