import * as React from 'react';

import { usersAndOrganizationsPromises } from '../Utilities/Api';
import { FetchError, UserData } from '../Utilities/Types';
import { getRandomItems } from '../Utilities/UtilityFunctions';
import { Route, Switch } from 'react-router-dom';

import '../App.css';
import LoadingPage from '../Pages/LoadingPage';
import ErrorPage from '../Pages/ErrorPage';
import UserListPage from '../Pages/UserListPage';
import App from './SearchPage';
import RepoDetailPage from './RepoDetailPage';
import RepoListPage from './RepoListPage';

function Home() {
  const [users, setUsers] = React.useState([] as UserData[] )
  const [organizations, setOrganizations] = React.useState([] as UserData[] )
  const [error, setError] = React.useState({isError:false} as FetchError)
  const [isLoading, setIsLoading] = React.useState(true as Boolean)
  const usersPerPage:number = 5

  React.useEffect(() => {

    usersAndOrganizationsPromises()
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
      <div className='search-page'>
        <Switch>
            <Route exact path="/" ><App /></Route>
            <Route path="/repos/:owner/:repo" ><RepoDetailPage/></Route>
            <Route path="/list/:owner/:type" ><RepoListPage/></Route>
        </Switch >
      </div> 
      <UserListPage users={users} organizations={organizations} />
    </>
  );
}

export default Home;