import * as React from 'react';
import './App.css';
import { usersApi, organizationsApi } from './Utilities/Api';

function App() {
  const [users, setUsers] = React.useState(undefined as any )
  const [organizations, setOrganizations] = React.useState(undefined as any )

  React.useEffect(() => {

      usersApi()
        .then((response: any) => {
          setUsers(response.data)
        })
        .catch((e: any) => console.log(e))

      organizationsApi()
        .then((response: any) => {
          setOrganizations(response.data)
        })
        .catch((e: any) => console.log(e))

  }, [])



  return (
    <div >

    </div>
  );
}

export default App;
