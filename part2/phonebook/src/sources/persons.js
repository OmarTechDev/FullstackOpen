import axios from "axios";
const URL = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(URL)

    return request.then(response => response.data)
}

const add = async personObject => {
    const request = axios.post(URL, personObject)

    return await request.then(response => response.data)
}

const doThings = {
    getAll,
    add
}

export default doThings
