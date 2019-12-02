import React, { useState } from 'react'


const NewListItem = ({persons, newName, newNumber, setNewName, setNewNumber}) => {

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
  )
}

export default NewListItem