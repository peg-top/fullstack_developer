import react from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({ courseData }) => {

    const { title, courses } = courseData 
    console.log("Component Course: ", title, courses)
  
    return (
      <>
        <Header title={title} />
        <Content courses={courses} />
        <Total courses={courses} />
      </>
    )}

export default Course