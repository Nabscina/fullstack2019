import React, { useState } from 'react'
import { checkServerIdentity } from 'tls';

const Names = ({ persons }) => {
  return (
    <div>
      {persons.map(person => <li key={person.id}>{person.name}</li>)}
    </div>
  )
}

const App = () => {

  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      id: 1
    }
  ])
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      id: persons.length + 1,
    }
    if (persons.map(person => person.name).includes(nameObject.name)) {
      window.alert('That name already exists!')
    } else {
      setPersons(persons.concat(nameObject))
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
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