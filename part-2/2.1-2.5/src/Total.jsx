import React from 'react'

const Total = ({ courses }) =>
    <p>
        Number of exercises {courses.reduce((sum, {exercises}) => sum + exercises, 0)}
    </p>
  

export default Total