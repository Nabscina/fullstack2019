import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
      <div>
        <p>
          {props.name}
        </p>
      </div>
    )
  }

  const Content = (props) => {
    console.log(props)
    return (
      <div>
        <p>
          <Part part={props.parts[0].name} ex={props.parts[0].exercises}/>
          <Part part={props.parts[1].name} ex={props.parts[1].exercises}/>
          <Part part={props.parts[2].name} ex={props.parts[2].exercises}/>
        </p>
      </div>
    )
  }

  const Total = (props) => {
    return (
      <div>
        <p>
          Total number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}
        </p>
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
          <Header name={props.course.name}/>
          <Content parts={props.course.parts}/>
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