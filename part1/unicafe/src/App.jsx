import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseByOne = (stateSetter) => {stateSetter((prevValue) => prevValue +1)}

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => increaseByOne(setGood)}>good</button>
      <button onClick={() => increaseByOne(setNeutral)}>neutral</button>
      <button onClick={() => increaseByOne(setBad)}>bad</button>
      <h1>statics</h1>
      <p>
        good {good}<br/>
        neutral {neutral}<br/>
        bad {bad}
      </p>
    </div>
  )
}

export default App
