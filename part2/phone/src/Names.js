import React from 'react'

const Names = ({ persons, removeName }) => {
  return (
    <div>
      {persons.map(person => <li key={person.id}>
        <button onClick={() => removeName(person.id, person.name)} value={person.id}>delete</button>
        {person.name} {person.number}
      </li>)}
    </div>
  )
}

export default Names