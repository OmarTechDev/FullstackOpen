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
