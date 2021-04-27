import axios from 'axios'

const url = 'https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router'
//'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3'
const apiClient = axios.create({
    baseURL: url,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
    }
})

export default {

    getEvents(perPage, page) {
        return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
    },

    getEvent(id) {
        return apiClient.get('/events/' + id)
    }
}