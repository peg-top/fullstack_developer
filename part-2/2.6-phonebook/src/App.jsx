import React from 'react'
import { useState } from 'react'

const App = () =>{

  console.log('App component')

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
        id: persons.length + 1,
        name: newPersonName,
        number: Math.floor(Math.random() * 100000000)
      }
      setPersons([...persons, newPerson])
      setNewPerson('')
      setNewNumber('')
    }
  }
  
  return (
    <>
      <h2>Phonebook</h2>
      <div>
        <label htmlFor="filter">filter shown with: 
          <input type="text" id="filter" name="filter" value={filterName} onChange={handleFilterInput}/>
        </label>
      </div>
      <div>
        <h2>Add a new</h2>
        <form id="phoneBook" onSubmit={addPerson}>
          <div>
          <label htmlFor="phoneBook">name: 
            <input type="text" id="phoneBook" name="phoneBook" value={newPersonName} onChange={handleNameInput}/>
          </label>
          </div>
          <div>
          <label htmlFor="phoneBook">number: 
            <input type="text" id="phoneBook" name="phoneBook" value={newPersonNumber} onChange={handleNumberInput}/>
          </label>
          </div>
          <button type="submit">add</button>
        </form>
        </div>
        <div>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => 
          person.name.includes(filterName)
            ? 
              <li key={person.id}>{person.name} {person.number}</li>
            : null
        )}
      </ul>
    </div>
    </>
  )
}

export default App
