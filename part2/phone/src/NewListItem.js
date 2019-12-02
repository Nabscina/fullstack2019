import React from 'react'
import Field from './Field'


const NewListItem = ({ addName, newName, newNumber, handleNameChange, handleNumberChange }) => {
  return (
    <form onSubmit={addName}>
      <Field text={'name'} newObj={newName} handleChange={handleNameChange} />
      <Field text={'number'} newObj={newNumber} handleChange={handleNumberChange} />
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default NewListItem