import React from 'react'
import { useState } from 'react'

const App = () =>{

  console.log('App component')

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <main>
        <section>
          <h1>Give Feedback</h1>
          <button onClick={() => setGood(good + 1)}>good</button>
          <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
          <button onClick={() => setBad(bad + 1)}>bad</button>
        </section>
        <section>
          <h1>Statistics</h1>
          <ul>
            <li>good {good}</li>
            <li>neutral {neutral}</li>
            <li>bad {bad}</li>
          </ul>
        </section>
      </main>

    </>
  )
}

export default App
