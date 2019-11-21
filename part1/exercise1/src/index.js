import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
      <div>
        <p>
          {props.course}
        </p>
      </div>
    )
  }

  const Content = (props) => {
    return (
      <div>
        <p>
          <Part part={props.part1.name} ex={props.part1.exercises}/>
          <Part part={props.part2.name} ex={props.part2.exercises}/>
          <Part part={props.part3.name} ex={props.part3.exercises}/>
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
      <Header course={course.name} />
      <Content part1={course.parts[0]} part2={course.parts[1]} part3={course.parts[2]}/>
      <Total part1={course.parts[0]} part2={course.parts[1]} part3={course.parts[2]}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))