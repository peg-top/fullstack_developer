import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const url = "https://studies.cs.helsinki.fi/restcountries/api/all"
const urlName = 'https://studies.cs.helsinki.fi/restcountries/api/name/'

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

        { search !== "" ?
          ( findedCountries.length > 10)
            ?
              (<p>Too many matches, specify another filter</p>)
            : 
              ((findedCountries.length === 1)
                ?
                  (<>
                    <h1>{findedCountries[0].name.common}</h1>
                    <p>capital: {findedCountries[0].capital}</p>
                    <p>area: {findedCountries[0].area}</p>
                    <h2>languages</h2>
                    <ul>
                      {Object.values(findedCountries[0].languages).map((language) => 
                      <li key={language}>{language}</li>
                      )}
                    </ul>
                    <img src={findedCountries[0].flags.png} alt="flag" width="100" height="100"/>
                  </>)
                :
                  (<ul>
                    {findedCountries.map((country) => 
                    <li key={country.fifa}>{country.name.common}</li>
                    )}
                  </ul>))
            : <p>Please enter a serch term</p>}
        
    </>
  )
}

export default App
