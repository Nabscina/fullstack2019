import React, { useState } from 'react'

const Names = ({ persons }) => {
  return (
    <div>
      {persons.map(person => <li key={person.id}>{person.name} {person.number}</li>)}
    </div>
  )
}

const App = () => {

  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      id: 1,
      number: '420-1337'
    }
  ])
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div><Names persons={persons} /></div>
    </div>
  )

}

export default App