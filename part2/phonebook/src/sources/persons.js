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

const del = id => {
    const request = axios.delete(`http://localhost:3001/persons/${id}`)

    return request.then(res => res.data)
};

const update = (id, newNumber, sameName) => {
    const request = axios.put(`${URL}/${id}`, {name:`${sameName}`, number:`${newNumber}`||"" })
    return request.then(response => response.data)
};
const doThings = {
    getAll,
    add,
    del,
    update
}

export default doThings
