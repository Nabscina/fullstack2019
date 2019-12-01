import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.name}
      </h1>
    </div>
  )
}

const Content = (props) => {
  const result = props.parts.map(part => <Part part={part.name} ex={part.exercises} />)
  return (
    <div>
      {result}
    </div>
  )
}

const Total = (props) => {
  let total = 0
  props.parts.map(part => total += part.exercises)
  return (
    <div>
      Total number of exercises {total}
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part}, {props.ex} exercises
      </p>
    </div>
  )
}

const Course = (props) => {
  return (
    <div>
      <p>
        <Header name={props.course.name} />
        <Content parts={props.course.parts} />
        <Total parts={props.course.parts} />
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
      {
        name: 'Redux',
        exercises: 11
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))