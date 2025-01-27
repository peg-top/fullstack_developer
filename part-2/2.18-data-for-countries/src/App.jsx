import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const url = "https://studies.cs.helsinki.fi/restcountries/api/all"
const urlName = 'https://studies.cs.helsinki.fi/restcountries/api/name/'

const CountryInfo = ({ country }) => {
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
      {isShow && <CountryInfo country={country} />}
    </li>
  )
}


const ListOfCountries = ({ countries }) => {
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
