import React from 'react'
import { useState } from 'react'

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]


const App = () => {

  console.log('App component')

  const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length))
  const [votes, setVotes] = useState({})

  const handleNextAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  const handleVote = () => {

    console.log('handleVote:', selected)
    console.log('votes:', Object.keys(votes))

    if (votes[selected]){
      setVotes({
        ...votes,
        [selected]: votes[selected] + 1
      })
    } else {
      setVotes({
        ...votes,
        [selected]: 1
      })
    }
  }

  const mostVotes = () => {
    if (Object.keys(votes).length === 0) return null
    return Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b)
  }
  
  return (
    <>
    <section>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected] || 0} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNextAnecdote}>next anecdotes</button>
    </section>
    <section>
      <h1>Anecdote with most votes</h1>
      {
        mostVotes() ? (
          <>
            <p>{anecdotes[mostVotes()]}</p>
            <p>has {votes[mostVotes()]} votes</p>
          </>
        ) : (
          <p>No votes yet</p>
        )
      }
    </section>
    </>
  )
}

export default App
