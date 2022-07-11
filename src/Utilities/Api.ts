import { RepoDetailParams, RepoListData, UserResponse } from "./Types";

const axios = require('axios');

const itemsPerPage = 100;

export const gitHubClient = axios.create({ baseURL: 'https://api.github.com',  params: { per_page: itemsPerPage }})


export const reposDetailPromise = (ownerName:string, repoId:string):Promise<RepoDetailParams[]> =>{
    return gitHubClient.get(`/repos/${ownerName}/${repoId}`)
}



export const reposListPromise = (ownerName:string, type:string):Promise<RepoListData[]> =>{
    if(type === "users" )
        return gitHubClient.get(`/users/${ownerName}/repos`)
    else
        return gitHubClient.get(`/orgs/${ownerName}/repos`)
}

export const usersAndOrganizationsPromises = ():Promise<UserResponse[]> => {
    return Promise.all([
        gitHubClient.get('/users'),
        gitHubClient.get('/organizations')
      ])
}