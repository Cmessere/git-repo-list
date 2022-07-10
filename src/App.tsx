import * as React from 'react';
import { gitHubClient } from './Utilities/Api';
import './App.css';
import { usersApi, organizationsApi } from './Utilities/Api';

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



  return (
    <div >

    </div>
  );
}

export default App;
