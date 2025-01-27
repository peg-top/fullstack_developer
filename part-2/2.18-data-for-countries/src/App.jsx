import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const url = "https://studies.cs.helsinki.fi/restcountries/api/all"
const urlName = 'https://studies.cs.helsinki.fi/restcountries/api/name/'
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY


const CapitalWeather = ({ capital, capitalInfo }) => {

  console.log(`CapitaWeather: { capital: ${capital}, capitalInfo: ${capitalInfo} }`)

  const [lat, lon] = capitalInfo.latlng
  const [weather, setWeather] = useState(null)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

  console.log('URL:', url)

  useEffect(() => {
    axios.get(url).then(response => {
      console.log('Weather Promise fulfilled')
      console.log(response)
      setWeather(response.data)
    }).catch(error => {
      console.log('Error:', error)
    })
  }
  , [])


  return(
    <>
      { weather ? (
        <>
          <h1>Weather in {capital}</h1>
          <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>
          <p>wind {weather.wind.speed}</p>
        </>
      )
      :
        <p>Loading weather data...</p>
      }
    </>
  )
}

const CountryInfo = ({ country }) => {
  console.log('CountryInfo:', country)
  return (
    <>
      <h1>{country.name.common}</h1>
      <p>capital: {country.capital}</p>
      <p>area: {country.area}</p>
      <h2>languages</h2>
      <ul>
        {Object.values(country.languages).map((language) => 
        <li key={language}>{language}</li>
        )}
      </ul>
      <img src={country.flags.png} alt="flag" width="100" height="100"/>
      <CapitalWeather capital={country.capital} capitalInfo={country.capitalInfo} />
    </>
  )
}


const CountryLine = ({ country }) => {
  const [isShow, setShow] = useState(false)

  console.log('CountryLine:', country)

  const handleClick = () => {
    setShow(!isShow)
  }

  return(
    <li key={country.fifa}>
      {country.name.common}
      <button onClick={handleClick}>{isShow ? 'Hide' : 'Show'}</button>
      {isShow && <CountryInfo country={country}/>}
    </li>
  )
}


const ListOfCountries = ({ countries }) => {

  console.log('ListOfCountries:', countries)

  return (
    <ul>
      {countries.map((country) => 
        <CountryLine key={country.name.common} country={country} />
      )}
    </ul>
  )
}

const App = () =>{

  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])    

  useEffect(() => {
    console.log('Effect')
    console.log('Getting data from:', url)
    axios
      .get(url)
      .then(response => {
        console.log('Promise fulfilled')
        console.log(response)
        setCountries(response.data)
      }).catch(error => {
        console.log('Error:', error)
      })
  },
  []
)

  const handleSearchChange = (event) => {
    console.log('Hande Search Change', event.target.value)
    setSearch(event.target.value)
  }

  const findedCountries = countries.filter(country => 
    country.name.common.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <>
        <p>
          find countries:{' '}
          <input type="text" value={search} onChange={handleSearchChange} />
        </p>

        { search === "" 
          ? <p>Please enter a serch term</p>
          : (

          findedCountries.length > 10
            ? <p>Too many matches, specify another filter</p>
            : (
              findedCountries.length === 1
                ?
                  <CountryInfo country={findedCountries[0]} />
                :
                  <ListOfCountries countries={findedCountries} />
              )
            )
          }
        
    </>
  )
}

export default App
