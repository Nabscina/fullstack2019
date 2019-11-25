import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({ good, bad, neutral }) => {
    if (good + bad + neutral === 0) {
        return (
            <div>
                <p>NO STATISTICS GIVEN</p>
            </div>
        )
    } else {
        return (
            <div>
                <div>{good} good</div>
                <div>{neutral} neutral</div>
                <div>{bad} bad</div>
                <div>{good + bad + neutral} all</div>
                <div>{(good - bad) / (good + bad + neutral)} average</div>
                <div>{100 * good / (good + bad + neutral)} % positive</div>
            </div>
        )
    }
}

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
            <Statistics good={good} bad={bad} neutral={neutral} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)