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

const StatisticsLine = ({ text, value }) => {
  return (
    <li>{text} {value}</li>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  const isShowStatistics = good || neutral || bad

  const statistics = [
    {
      id: 1,
      text: 'good',
      value: () => good
    },
    {
      id: 2,
      text: 'neutral',
      value: () => neutral
    },
    {
      id: 3,
      text: 'bad',
      value: () => bad
    },
    {
      id: 4,
      text: 'all',
      value: () => good + neutral + bad
    },
    {
      id: 5,
      text: 'average',
      value: () => (good + neutral + bad) / 3
    },
    {
      id: 6,
      text: 'positive',
      value: () => good / (good + neutral + bad) * 100
    }
  ]

  console.log('Statistics component')
  return (  
    <section>
      <h1>Statistics</h1>
      {isShowStatistics ? 
        <ul>
          {statistics.map(({ id, text, value }) => (
            <StatisticsLine key={id} text={text} value={value()} />
          ))}
        </ul>
        : <p>No feedback given</p>
      }
    </section>
  )
}


const App = () => {

  console.log('App component')

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </main>
  )
}

export default App
