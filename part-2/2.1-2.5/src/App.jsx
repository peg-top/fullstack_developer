import React from 'react'
import Course from './Course'

const courseData = {
  title: 'Half Stack application development',
  courses: [
    {
      id: 0,
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      id: 1,
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      id : 2,
      name: 'State of a component',
      exercises: 14
    }
  ]
}


const App = () => {
  return (
    <>
      <Course courseData={courseData} />
    </>
  )
}

export default App
