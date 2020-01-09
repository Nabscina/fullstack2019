import React from 'react';
import { createNewAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {

  const addAnec = (event) => {
    event.preventDefault()
    const content = event.target.anec.value
    props.store.dispatch(createNewAnecdote(content))
    event.target.anec.value = ''
  }

  return (
    <form onSubmit={addAnec}>
      <input name="anec" />
      <button type="submit">create</button>
    </form>
  )
}

export default AnecdoteForm