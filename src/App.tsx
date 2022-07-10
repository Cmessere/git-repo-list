import * as React from 'react';

import { gitHubClient } from './Utilities/Api';
import { FetchError } from './Utilities/Types';
import { capitalizeString } from './Utilities/UtilityFunctions';

import './App.css';
import LoadingPage from './Components/LoadingPage';
import ErrorPage from './Components/ErrorPage';

function App() {
  const [users, setUsers] = React.useState(undefined as any )
  const [organizations, setOrganizations] = React.useState(undefined as any )
  const [error, setError] = React.useState({isError:false} as FetchError)
  const [isLoading, setIsLoading] = React.useState(true)

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
      .finally(() => setIsLoading(true))

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
    <div >
      <ul className='user-list'>
      {users.map(u => <li className='user-list-item'><p className='user-list-paragraph'>{capitalizeString(u.login)}</p><img src={u.avatar_url} alt="Avatar" className="avatar"/> </li>)}
      </ul>
      <ul className='organization-list'>
        {organizations.map(o => <li className='user-list-item'><p className='user-list-paragraph'>{capitalizeString(o.login)}</p> <img src={o.avatar_url} alt="Avatar" className="avatar"/> </li>)}
      </ul>
    </div>
  );
}

export default App;