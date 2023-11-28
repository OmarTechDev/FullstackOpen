import { useState, useEffect } from 'react'
import axios from "axios"
import doThings from './sources/countries'

const Filter = ({filter,handleFilter}) =>
(
  <div>
    Find Countries < input value ={filter} onChange={handleFilter}/>
  </div>
)

const Weather = ({capital}) => {
  const [temperature, setTemperature] = useState("")
    const [picture, setPicture] = useState("01d")
    const [wind, setWind] = useState(0)

    useEffect(() => {
      doThings
        .getOne(capital)
        .then(response=>{
          setTemperature(response.main.temp)
          setPicture(response.weather[0].icon)
          setWind(response.wind.speed)
      })
    }, [])

    return(
      <>
        <h2>Weather in {capital}</h2>
        <div>Temperature {(temperature -273.15).toFixed(2)} Celcius</div>
        <img src = {`http://openweathermap.org/img/wn/${picture}@2x.png`} width="100" height="91" alt=""/>
        <div>Wind {wind} [m/s]</div>
      </>
    )

}

const ShownOne = ({filtered}) => {
  const country = filtered
  return(
    <>
      <h1>{country.name.common}</h1>
      <p>
        Capital {country.capital[0]}<br/>
        Area {country.area}
      </p>
      <h3>languages</h3>
      <ul>
        {Object.values(country.languages).map((language, index) => {
          return (
            <li key={index}>
              {language}&nbsp;
            </li>
          )
        })}
      </ul>
      <img src={country.flags.svg} alt="Flag" style={{width:"120px"}}/>
      <Weather capital={country.capital[0]}/>
    </>
  )
}

const Shown = ({countries, filter}) => {
  const [selectedCountry, setSelectedCountry] = useState(null)

  const filteredCountries = countries.filter(countrie => {
    return countrie.name.common.trim().toLowerCase().includes(filter.toLowerCase())
  })

  const handleShowDetails = (country) => {
    setSelectedCountry(country);
  }

  if (filteredCountries.length <= 10 && filteredCountries.length > 1){
    return(
      <ul>
        {filteredCountries.map((country, index) => (
          <li key={index}>
            {country.name.common}&nbsp;
            <button onClick={() => handleShowDetails(country)}>shown</button>
          </li>
        ))}
        {selectedCountry && <ShownOne filtered={selectedCountry} />}
      </ul>
    )
  }
  else if(filteredCountries.length == 1){
    return(
      <ShownOne filtered={filteredCountries[0]}/>
    )
  }
  return(
    <p>Too many matches, specify another filter</p>
  )
}

function App() {

  const [filtered, setFiltered] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    doThings
      .getAll()
      .then(response => {
        setCountries(response)
      })
  }, [])

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value)
  }

  return (
    <div>
      <Filter filter={filtered} handleFilter={handleInputChange(setFiltered)}/>
      <Shown countries={countries} filter={filtered}/>
    </div>
  )
}

export default App
