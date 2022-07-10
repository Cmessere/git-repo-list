const axios = require('axios');
export const gitHubClient = axios.create({ baseURL: 'https://api.github.com' })