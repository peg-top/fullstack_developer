import React from 'react'
import { useState } from 'react'


const Feedback = ({ buttons }) => {
  console.log('Feedback component')
  return (
    <section>
      <h1>Give feedback</h1>
      {buttons.map(({ id, text, handleClick }) => (
        <Btn key={id} text={text} handleClick={handleClick} />
      ))}
    </section>
  )
}

const Btn = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  console.log('Statistics component')
  return (  
    <section>
      <h1>Statistics</h1>
      <ul>
        <li>good {good}</li>
        <li>neutral {neutral}</li>
        <li>bad {bad}</li>
        <li>all {good + neutral + bad}</li>
        <li>average {(good + neutral + bad)/3}</li>
        <li>positive {good / (good + neutral + bad) * 100} %</li>
      </ul>
    </section>
  )
}


const App = () => {

  console.log('App component')

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const isShowStatistics = good || neutral || bad

  const buttons = [
      {
        id: 1,
        text: 'good',
        handleClick () { setGood(good + 1) }
      }
      ,
      {
        id: 2,
        text: 'neutral',
        handleClick() { setNeutral(neutral + 1) }
      },
      {
        id: 3,
        text: 'bad',
        handleClick() {setBad(bad + 1)}
      }
    ]

  return (
    <main>
      <Feedback buttons={buttons} />
      {isShowStatistics ? <Statistics good={good} neutral={neutral} bad={bad} /> : <p>No feedback given</p>}
    </main>
  )
}

export default App
