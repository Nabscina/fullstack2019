import React from 'react';
import { voteForAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = (props) => {

  const anecdotes = props.store.getState()

  const vote = (id) => {
    props.store.dispatch(voteForAnecdote(id))
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList