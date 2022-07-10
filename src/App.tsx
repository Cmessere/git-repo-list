import * as React from 'react';

import { gitHubClient } from './Utilities/Api';
import { FetchError, UserData } from './Utilities/Types';
import { cleanSearchValue, getRandomItems } from './Utilities/UtilityFunctions';

import './App.css';
import LoadingPage from './Pages/LoadingPage';
import ErrorPage from './Pages/ErrorPage';
import UserListPage from './Pages/UserListPage';
import { useHistory } from 'react-router-dom';

function App() {
  const [users, setUsers] = React.useState([] as UserData[] )
  const [organizations, setOrganizations] = React.useState([] as UserData[] )
  const [error, setError] = React.useState({isError:false} as FetchError)
  const [isLoading, setIsLoading] = React.useState(true as Boolean)
  const [searchValue, setSearchValue] = React.useState("" as string)
  const usersPerPage:number = 5

  let history = useHistory()

  const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault()
    const cleanedValue = cleanSearchValue(searchValue)
    history.push(`/repos/${cleanedValue}`)
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
      .catch((e: FetchError) => {
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
          <h2 className='search-subtitle'>Input the owner and the repository name:</h2>
          <input  className='search-input' type="text" value={searchValue} onChange={handleSearch} />
        </form>
      </div>
      <UserListPage users={users} organizations={organizations} />
    </div>
  );
}

export default App;