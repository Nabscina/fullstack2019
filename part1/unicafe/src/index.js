import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <p>GIVE FEEDBACK</p>
      <button onClick={() => setGood(good + 1)}> good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <p>STATISTICS</p>
      <div>{good} good</div>
      <div>{neutral} neutral</div>
      <div>{bad} bad</div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)