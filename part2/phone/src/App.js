import React, { useState, useEffect } from 'react'
import Names from './Names'
import NewListItem from './NewListItem'
import numberService from './services/numbers'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    numberService
      .getAll()
      .then(persons => {
        setPersons(persons)
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
      numberService
        .create(newObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const removeName = (id, name) => {
    if (window.confirm('Delete ' + name + '?')) {
      numberService
        .remove(id)
        .then()
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
        <Names persons={persons} removeName={removeName} />
      </div>
    </div>
  )
}

export default App