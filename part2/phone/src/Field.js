import React from 'react'

const Field = ({text, newObj, handleChange}) => {
  return (
    <div>
    {text}: <input value={newObj} onChange={handleChange} />
  </div>
  )
}

export default Field