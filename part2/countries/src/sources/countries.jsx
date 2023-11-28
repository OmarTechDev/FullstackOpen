import axios from "axios";
const URL = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getAll = async() => {
    const request = await axios.get(URL)

    return request.data
}

const getOne = async (capital) => {
    const request = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${
          import.meta.env.VITE_SOME_KEY
        }`
    )

    return request.data
}
const doThings = {
    getAll,
    getOne
}

export default doThings
