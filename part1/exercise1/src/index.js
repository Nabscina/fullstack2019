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
          <Part part={props.p1} ex={props.e1}/>
          <Part part={props.p2} ex={props.e2}/>
          <Part part={props.p3} ex={props.e3}/>
        </p>
      </div>
    )
  }

  const Total = (props) => {
    return (
      <div>
        <p>
          Total number of exercises {props.ex1 + props.ex2 + props.ex3}
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
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content e1={exercises1} p1={part1} e2={exercises2} p2={part2} e3={exercises3} p3={part3}/>
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))