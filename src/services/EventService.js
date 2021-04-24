import axios from 'axios'

const url = 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3'
const apiClient = axios.create({
    baseURL: url,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
    }
})

export default {

    getEvents() {
        return apiClient.get('/events')
    },

    getEvent(id) {
        return apiClient.get('/events/' + id)
    }
}