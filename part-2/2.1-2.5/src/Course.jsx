import react from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({ course }) => {

    const { name, parts } = course 
    console.log("Component Course: ", name, parts)
  
    return (
      <>
        <Header title={name} />
        <Content courses={parts} />
        <Total courses={parts} />
      </>
    )}

export default Course