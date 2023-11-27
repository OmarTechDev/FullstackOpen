import { useState, useEffect } from 'react'
import doThings from './sources/persons'

const Filter = ({filter,handleFilter}) =>
(
  <div>
    filter shown with <input value ={filter} onChange={handleFilter}/>
  </div>
)

const Shown = ({persons, filter, handleDelete}) => {
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

const PersonForm = ({handleAddPerson, handleNameChange, handleNumberChange, name, number}) => (

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

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filtered, setFiltered] = useState('')

  useEffect(() => {
    doThings
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  const handleAddPerson = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName) && window.confirm(`${newName} is already added to phonebook, replace the old number with a new one`)) {
      const findedID = persons.find(person => person.name === newName).id
      doThings
        .update(findedID, newNumber, newName)
        .then(response => {
          setPersons(persons.map(person => person.id !== findedID ? person:response))
        })
        .catch(error => {
          console.log('The error is', error)
        })

    }
    else {
      const nameAdded = {
        name: newName,
        number: newNumber,
        id: persons.length+1
      }

      doThings
        .add(nameAdded)
        .then( response => {
          setPersons(persons.concat(response))
          setNewName('')
          setNewNumber('')
        })
        .catch(error=> console.log('this is the error', error))
    }
  }

  const handleDelete = (person) => {
    if(window.confirm(`${newName} is already added to phonebook`)){
      doThings
        .del(person.id)
        .then(() => {
          setPersons(persons.filter(selected => selected.id !== person.id))
        })
    }
  }

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filtered} handleFilter={handleInputChange(setFiltered)}/>
      <h3>add a new</h3>
      <PersonForm
        handleAddPerson={handleAddPerson}
        handleNameChange={handleInputChange(setNewName)}
        handleNumberChange={handleInputChange(setNewNumber)}
        name={newName}
        number={newNumber}
      />
      <h3>Numbers</h3>
      <Shown persons={persons} filter={filtered} handleDelete={handleDelete}/>
    </div>
  )
}

export default App
