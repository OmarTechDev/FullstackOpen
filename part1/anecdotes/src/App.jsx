import { useState } from 'react'

const OneDay = ({anecdotes, votes, handleVote, handleSelectRandom}) => (
  <>
    <h1>Anecdote of the day</h1>
    {anecdotes}<br/>
    has {votes} votes <br/>
    <button onClick={handleVote}>vote</button>
    <button onClick={handleSelectRandom}>next anecdote</button>
  </>
)

const MostVoted = ({anecdotes, voted}) => {
  const bestAnecdote = anecdotes[voted.indexOf(Math.max(...voted))]
  return(
    <>
      <h1>Anecdote with most votes</h1>
      {bestAnecdote}
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(new Array(anecdotes.length).fill(0))

  const handleSelectRandom = () => {
    const randomValue = Math.floor(Math.random() * 8)
    setSelected(randomValue)
  }
  const handleVote = () => {
    const copy = [...voted]
    copy[selected]++
    setVoted(copy)
  }

  return (
    <div>
      <OneDay
        anecdotes={anecdotes[selected]}
        votes={voted[selected]}
        handleVote={handleVote}
        handleSelectRandom={handleSelectRandom}
      />
      <MostVoted anecdotes={anecdotes} voted={voted}/>
    </div>
  )
}

export default App
