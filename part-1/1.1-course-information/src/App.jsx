import React from 'react'


const Header = ({ title }) => (
    <h1>{title}</h1>
  )

const CourseInfo = ({ course, exercises }) => {
  return (
    <p>
      {course} {exercises}
    </p>
  ) 
}

const Total = ({ courses }) => (
    <p>Number of exercises {courses.reduce((sum, {exercises}) => sum + exercises, 0)}</p>
  ) 


const Content = ({ courseData }) => {
  const { title, courses } = courseData
  return (
    <>
      <Header title={title} />
      {courses.map((course) => (
        <CourseInfo key={course.id} course={course.name} exercises={course.exercises} />
      ))}
      <Total courses={courses} />
    </>
  )}

const App = () => {

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

  return (
    <>
      <Content courseData={courseData} />
    </>
  )
}

export default App
