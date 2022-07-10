export type FetchError = {
    isError: boolean,
    message?: string
}

export type UserData = {
    login: string,
    avatar_url: string
}

export type RepoDetailParams = {
    owner:string,
    repo: string
}