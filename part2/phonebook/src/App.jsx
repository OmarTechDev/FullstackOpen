import { useState, useEffect } from 'react'
import doThings from './sources/persons'
import { Filter, Shown, PersonForm, Notifications } from './components/book'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filtered, setFiltered] = useState('')
  const [message, setMessage] = useState([])

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
          setMessage([`Information of ${newName} has already been removed from server`,1])
          setTimeout(() => {
            setMessage([null,null])
          }, 5000)
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
          setMessage(['Number Successfully Added',0])
          setTimeout(() => {
            setMessage([null,null])
          }, 5000)
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
      <Notifications message={message}/>
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
