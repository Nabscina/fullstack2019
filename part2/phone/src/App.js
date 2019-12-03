import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Names from './Names'
import NewListItem from './NewListItem'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const newObject = {
      name: newName,
      id: persons.length + 1,
      number: newNumber
    }

    if (persons.map(person => person.name).includes(newObject.name)) {
      window.alert('That name already exists!')
    } else {
      setPersons(persons.concat(newObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <NewListItem addName={addName} newName={newName} newNumber={newNumber}
        handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <div>
        <Names persons={persons} />
      </div>
    </div>
  )
}

export default App