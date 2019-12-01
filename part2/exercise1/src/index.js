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
  const content = props.course.map(course =>
    <p>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </p>)
  return (
    <div>
      {content}
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course course={courses} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))