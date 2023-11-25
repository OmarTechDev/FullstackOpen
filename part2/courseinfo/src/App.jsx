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
  <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
)

const Course = ({course}) => (
  <div>
    <Header course={course.name}/>
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
)

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return <Course course={course} />
}

export default App
