export const Filter = ({filter,handleFilter}) =>
(
  <div>
    filter shown with <input value ={filter} onChange={handleFilter}/>
  </div>
)

export const Shown = ({persons, filter, handleDelete}) => {
  return(
    <ul>
      {persons.map(person => {
        if ( person.name.toLowerCase().includes(filter) )
        return (
          <li key={person.id}>
            {person.name}&nbsp;
            {person.number}&nbsp;<button onClick={() => handleDelete(person)}>delete</button>
          </li>
        )
      })}
    </ul>
  )
}

export const PersonForm = ({handleAddPerson, handleNameChange, handleNumberChange, name, number}) => (

  <form onSubmit={handleAddPerson}>
    <div>
      name:
      <input
        value={name}
        onChange={handleNameChange}
      />
    </div>
    <div>
      number:
      <input
        value={number}
        onChange={handleNumberChange}
      />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

export const Notifications = ({message}) => {

  const selectStyle = [
    {
      color: 'green',
      background: 'lightgrey',
      fontSize: 20,
      border: "5px solid green",
      borderRadius:11,
      padding: 10,
      marginBottom: 10
    },
    {
      color: 'red',
      background: 'lightgrey',
      fontSize: 20,
      border: "5px solid red",
      borderRadius:11,
      padding: 10,
      marginBottom: 10
    }
  ]

  if (message[0] === null) return null

  return (
    <div style={selectStyle[message[1]]}>
      {message[0]}
    </div>
  )
}
