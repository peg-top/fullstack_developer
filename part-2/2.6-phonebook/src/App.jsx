import React from 'react'
import { useState, useEffect } from 'react'
import Filtered from './Filtered'
import AddPerson from './AddPeson'
import ShowPeople from './ShowPeople'
import axios from 'axios'


const App = () =>{

  console.log('App component')

  useEffect(() => {
    console.log('effect')
    axios.get('http://localhost:3001/persons').then(response => {
      console.log('promise fulfilled')
      console.log(response)
      setPersons(response.data)
    })
  }, [])

  const [persons, setPersons] = useState([])
  const [newPersonName, setNewPerson] = useState('')
  const [newPersonNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  const handleNameInput = (event) => {
    console.log('New Person Name', event.target.value)
    setNewPerson(event.target.value)
  }

  const handleNumberInput = (event) => {
    console.log('New Person Number', event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterInput = (event) => {
    console.log('Filter Name', event.target.value)
    setFilterName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.find(person => person.name === newPersonName)) {
      alert(`${newPersonName} is already added to phonebook`)
    } else {
      const newPerson = {
        // id: persons.length + 1,
        name: newPersonName,
        number: Math.floor(Math.random() * 100000000)
      }
      // setPersons([...persons, newPerson])
      axios.post('http://localhost:3001/persons', newPerson).then(response => {
        console.log('promise fulfilled')
        console.log(response)
        setPersons([...persons, response.data])
      })
      setNewPerson('')
      setNewNumber('')
    }
  }
  
  return (
    <>
      <div>
      <h2>Phonebook</h2>
        <Filtered
          filterName={filterName}
          handleFilterInput={handleFilterInput}
        />
      </div>
      <div>
        <h2>Add a new</h2>
        <AddPerson
          newPersonName={newPersonName}
          newPersonNumber={newPersonNumber}
          handleNameInput={handleNameInput}
          handleNumberInput={handleNumberInput}
          addPerson={addPerson}
        />
      </div>
      <div>
        <h2>Numbers</h2>
        <ShowPeople
          persons={persons}
          filterName={filterName}
        />
      </div>
    </>
  )
}

export default App
