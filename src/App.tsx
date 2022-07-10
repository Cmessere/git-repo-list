import * as React from 'react';

import { gitHubClient } from './Utilities/Api';
import { FetchError } from './Utilities/Types';

import './App.css';
import LoadingPage from './Pages/LoadingPage';
import ErrorPage from './Pages/ErrorPage';
import UserListPage from './Pages/UserListPage';

function App() {
  const [users, setUsers] = React.useState(undefined as any )
  const [organizations, setOrganizations] = React.useState(undefined as any )
  const [error, setError] = React.useState({isError:false} as FetchError)
  const [isLoading, setIsLoading] = React.useState(true as Boolean)

  React.useEffect(() => {

      Promise.all([
        gitHubClient.get('/users'),
        gitHubClient.get('/organizations')
      ])
      .then(([usersResponse, organizationsResponse])=>{
        setUsers(usersResponse.data)
        setOrganizations(organizationsResponse.data)
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