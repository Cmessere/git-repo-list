import * as React from 'react';
import { useParams } from 'react-router-dom';
import { reposDetailPromise } from '../Utilities/Api';
import { FetchError, RepoApiResponse, RepoDetailParams } from '../Utilities/Types';
import ErrorPage from './ErrorPage';
import LoadingPage from './LoadingPage';

const RepoDetailPage = () => {

    const params:RepoDetailParams = useParams()
    const [repoDetails, setRepoDetails] = React.useState({} as RepoApiResponse)
    const [error, setError] = React.useState({isError:false} as FetchError)
    const [isLoading, setIsLoading] = React.useState(true as Boolean)
    
    React.useEffect(() =>{
        
        reposDetailPromise(params.owner, params.repo)
          .then((response:any)=>{
            setRepoDetails(response.data)
          })
          .catch((e: FetchError) => {
            setError({isError:true, message:e.message})
          })
          .finally(() => setIsLoading(false))
    },[params])

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

    return(
        <div >
            <h1>Welcome to {params.owner}'s repo page for {params.repo} </h1>
            <h2>Subscribers: {repoDetails.subscribers_count}</h2>
            <h2>Stars: {repoDetails.watchers_count}</h2>
            <h2>Forks: {repoDetails.forks_count}</h2>
        </div>
      )
}

export default RepoDetailPage; 