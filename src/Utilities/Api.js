const axios = require('axios');
const client = axios.create({ baseURL: 'https://api.github.com' })

export const usersApi = () =>{
    return client.get('/users')
}
export const organizationsApi = () =>{
    return client.get('/organizations')
}