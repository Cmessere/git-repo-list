import * as React from 'react';

import { gitHubClient } from './Utilities/Api';
import { FetchError } from './Utilities/Types';
import { getRandomItems } from './Utilities/UtilityFunctions';

import './App.css';
import LoadingPage from './Pages/LoadingPage';
import ErrorPage from './Pages/ErrorPage';
import UserListPage from './Pages/UserListPage';

function App() {
  const [users, setUsers] = React.useState(undefined as any )
  const [organizations, setOrganizations] = React.useState(undefined as any )
  const [error, setError] = React.useState({isError:false} as FetchError)
  const [isLoading, setIsLoading] = React.useState(true as Boolean)
  const [searchValue, setSearchValue] = React.useState("" as string)
  const usersPerPage = 5

  const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault()
    console.log("Searching: ", searchValue)
  }

  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setSearchValue(e.target.value)
  }


  React.useEffect(() => {

      Promise.all([
        gitHubClient.get('/users'),
        gitHubClient.get('/organizations')
      ])
      .then(([usersResponse, organizationsResponse])=>{
        setUsers(getRandomItems(usersResponse.data, usersPerPage))
        setOrganizations(getRandomItems(organizationsResponse.data, usersPerPage))
      })
      .catch((e: any) => {
        setError({isError:true, message:e.message})
      })
      .finally(() => setIsLoading(false))

  }, [])


  if(isLoading){
    return(
      <LoadingPage />
    )
  }
  if(error.isError){
    return(
      <ErrorPage message={error.message} />
    )
  }

  return (
    <div className='search-page'>
      <div className='search-container'>
        <h1 className='search-title'>GitHub Search</h1>
        <form className='search-form'  onSubmit={handleSubmit}>
          <h2 className='search-subtitle'>Input a user's or an organization's name to show its repos</h2>
          <input  className='search-input' type="text" value={searchValue} onChange={handleSearch} />
        </form>
      </div>
      <UserListPage users={users} organizations={organizations} />
    </div>
  );
}

export default App;