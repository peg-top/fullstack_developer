import React from 'react'

const Total = ({ courses }) =>
    <h3>
        Total of exercises {courses.reduce((sum, {exercises}) => sum + exercises, 0)}
    </h3>
  

export default Total