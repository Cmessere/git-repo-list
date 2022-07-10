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
  const usersPerPage = 5

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
    <UserListPage users={users} organizations={organizations} />
  );
}

export default App;