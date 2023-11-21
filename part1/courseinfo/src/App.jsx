const Header = ({ course }) =>{
  console.log({course})
  return(
    <>
      <h1>{course}</h1>
    </>
  )
}

const Part = ({ name, exercise }) =>(
  <p>
    {name} {exercise}
  </p>
)

const Content = ({ parts }) => (
  <>
    <Part name={parts[0].name} exercise={parts[0].exercises}/>
    <Part name={parts[1].name} exercise={parts[1].exercises}/>
    <Part name={parts[2].name} exercise={parts[2].exercises}/>
  </>
)

const Total = ({ parts }) => (
  <p>Number of exercises {parts[0].exercise + parts[1].exercise + parts[2].exercise}</p>
)

const App = () => {

  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
