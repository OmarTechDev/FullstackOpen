import { useState } from 'react'

const Button = ({ handleClick, label }) => {
  return(
    <button onClick={handleClick}>
      {label}
    </button>
  )
}
//------------------------------------------------------- 1st Version 1.8  ----------------------------------------------------
// const All = ({ good, neutral, bad }) => (
//   <>
//     all {bad + neutral + good}<br/>
//   </>
// )
// const Average = ({ good, neutral, bad }) => {

//   const average = (good !==0 || neutral !==0 || bad !== 0 ) ? (good - bad)/(bad+neutral+good) : 0

//   return(
//     <>
//       average {average}<br/>
//     </>
//   )
// }

// const Positive = ({ good, neutral, bad }) => {

//   const positive = (good !==0 || neutral !==0 || bad !== 0 ) ? (good)/(bad+neutral+good) : 0

//   return(
//     <>
//       positive {positive}<br/>
//     </>
//   )
// }

// const Info = ({good, neutral, bad}) => (
//   <p>
//     good {good}<br/>
//     neutral {neutral}<br/>
//     bad {bad}<br/>
//     <All bad={bad} neutral={neutral} good={good}/>
//     <Average bad={bad} neutral={neutral} good={good}/>
//     <Positive bad={bad} neutral={neutral} good={good}/>
//   </p>
// )

const StaticsLine = ({text, value}) => (
  <>
    <td> {text} </td>
    <td> {value} </td>
  </>
)

const Statics = ({good, neutral, bad}) => {

  const all = bad + neutral + good
  const average = ( good !==0 || neutral !==0 || bad !== 0 ) ? (good - bad)/(bad+neutral+good) : 0
  const positive = ( good !==0 || neutral !==0 || bad !== 0 ) ? (good)/(bad+neutral+good) : 0

  if(good !== 0 || neutral !== 0 || bad !== 0) {
    return(
      <table>
        <tbody>
          <tr><StaticsLine text="good" value={good}/></tr>
          <tr><StaticsLine text="neutral" value={neutral}/></tr>
          <tr><StaticsLine text="bad" value={bad}/><tr/></tr>
          <tr><StaticsLine text="all" value={all}/><tr/></tr>
          <tr><StaticsLine text="average" value={average}/></tr>
          <tr><StaticsLine text="positive" value={positive}/></tr>
        </tbody>
      </table>
    )
  }
  else {
    return(
      <div>
        No feedback given
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseByOne = (stateSetter) => {stateSetter((prevValue) => prevValue +1)}

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => increaseByOne(setGood)} label="good" />
      <Button handleClick={() => increaseByOne(setNeutral)} label="neutral" />
      <Button handleClick={() => increaseByOne(setBad)} label="bad" />
      <h1>statics</h1>
      <Statics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
