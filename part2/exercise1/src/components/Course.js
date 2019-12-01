import React from 'react'

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
  const result = props.parts.map(part => <Part key={part.id} part={part.name} ex={part.exercises} />)
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
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
  return (
    <div>
      {content}
    </div>
  )
}

export default Course