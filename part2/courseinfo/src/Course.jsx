const Header = ({ course }) =>{
  return(
    <>
      <h2>{course}</h2>
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
    {/* <Part name={parts[0].name} exercise={parts[0].exercises}/>
    <Part name={parts[1].name} exercise={parts[1].exercises}/>
    <Part name={parts[2].name} exercise={parts[2].exercises}/> */}
    {parts.map((part) =>(
      <Part name={part.name} exercise={part.exercises}/>
    ))}
  </>
)

const Total = ({ parts }) => (
  <b><p>Number of exercises {parts.reduce((sum,part) => sum + part.exercises, 0)}</p></b>
)

const Course = ({course}) => (
  <>
    <Header course={course.name}/>
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>
)

export default Course
