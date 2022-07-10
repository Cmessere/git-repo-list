const axios = require('axios');

const itemsPerPage = 5;

export const gitHubClient = axios.create({ baseURL: 'https://api.github.com',  params: { per_page: itemsPerPage }})