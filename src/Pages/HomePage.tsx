import * as React from 'react';

import { gitHubClient } from '../Utilities/Api';
import { FetchError, UserData } from '../Utilities/Types';
import { getRandomItems } from '../Utilities/UtilityFunctions';

import '../App.css';
import LoadingPage from '../Pages/LoadingPage';
import ErrorPage from '../Pages/ErrorPage';
import UserListPage from '../Pages/UserListPage';
import { Route, Switch } from 'react-router-dom';
import App from './SearchPage';
import RepoDetailPage from './RepoDetailPage';

function Home() {
  const [users, setUsers] = React.useState([] as UserData[] )
  const [organizations, setOrganizations] = React.useState([] as UserData[] )
  const [error, setError] = React.useState({isError:false} as FetchError)
  const [isLoading, setIsLoading] = React.useState(true as Boolean)
  const usersPerPage:number = 5

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
    <>
      <Switch>
            <div className='search-page'>
              <Route exact path="/" ><App /></Route>
              <Route path="/repos/:owner/:repo" ><RepoDetailPage/></Route>
            </div> 
          </Switch >
      <UserListPage users={users} organizations={organizations} />
    </>
  );
}

export default Home;