import React from 'react'
import { useState } from 'react'

const App = () =>{

  console.log('App component')

  const [persons, setPersons] = useState([])
  const [newPersonName, setNewPerson] = useState('')

  const handleInput = (event) => {
    console.log('New Person Name', event.target.value)
    setNewPerson(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      id: persons.length + 1,
      name: newPersonName,
      number: Math.floor(Math.random() * 100000000)
    }
    setPersons([...persons, newPerson])
    setNewPerson('')
  }
  
  return (
    <>
      <h2>Phonebook</h2>
      <form id="phoneBook" onSubmit={addPerson}>
        <label htmlFor="phoneBook">name: </label>
        <input type="text" id="phoneBook" name="phoneBook" value={newPersonName} onChange={handleInput}/>
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => <li key={person.id}>{person.name} {person.number}</li>)}
      </ul>
    </>
  )
}

export default App
