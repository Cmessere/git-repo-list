const axios = require('axios');

const itemsPerPage = 100;

export const gitHubClient = axios.create({ baseURL: 'https://api.github.com',  params: { per_page: itemsPerPage }})


export const reposDetailPromise = (ownerName, repoId) =>{
    return gitHubClient.get(`/repos/${ownerName}/${repoId}`)
}