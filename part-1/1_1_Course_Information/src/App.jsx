import React from 'react'


const Header = ({ title }) => (
    <h1>{title}</h1>
  )

const Content = ({ course, exercises }) => {
  return (
    <p>
      {course} {exercises}
    </p>
  ) 
}

const Total = ( { courses }) => (
    <p>Number of exercises {courses.reduce((sum, {exercises}) => sum + exercises, 0)}</p>
  ) 

const App = () => {

  const coursesTitle = 'Half Stack application development'
  const courses = [
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

  return (
    <>
      <Header title={coursesTitle} />
      {courses.map(course => (
        <Content key={course.id} course={course.name} exercises={course.exercises} />
      ))}
      <Total courses={courses} />
    </>
  )
}

export default App
