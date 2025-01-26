import React from 'react'
import Part from './Part.jsx'

const Content = ({ courses }) => {

    console.log("Component Content: ", courses)
    
    return (
      <>
        {courses.map((course) => (
          <Part key={course.id} course={course.name} exercises={course.exercises} />
        ))}
      </>
    )
  
  }

export default Content