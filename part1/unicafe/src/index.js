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
                <Statistic value={good} text="good"/>
                <Statistic value={neutral} text="neutral"/>
                <Statistic value={bad} text="bad"/>
                <Statistic value={good + bad + neutral} text="all"/>
                <Statistic value={(good - bad) / (good + bad + neutral)} text="average"/>
                <Statistic value={100 * good / (good + bad + neutral)} text="% positive"/>
            </div>
        )
    }
}

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>{text}</button>
)

const Statistic = ({value, text}) => (
    <div>{value} {text}</div>
)

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <p>GIVE FEEDBACK</p>
            <Button handleClick={() => setGood(good + 1)} text="good" />
            <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
            <Button handleClick={() => setBad(bad+ 1)} text="bad" />
            <p>STATISTICS</p>
            <Statistics good={good} bad={bad} neutral={neutral} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)