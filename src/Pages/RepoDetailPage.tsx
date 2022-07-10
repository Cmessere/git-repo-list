import * as React from 'react';
import { useParams } from 'react-router-dom';
import { reposDetailPromise } from '../Utilities/Api';
import { FetchError, RepoApiResponse, RepoDetailParams } from '../Utilities/Types';
import { faEye, faStar, faCodeFork } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <div className="repo-detail-page">
            <h1>{params.owner}'s '{params.repo}' </h1>
            <div className='repo-detail-container'>
              <h2 className='repo-detail-item'><FontAwesomeIcon className='repo-detail-icon' icon={faEye} />Subs: {repoDetails.subscribers_count}</h2>
              <h2 className='repo-detail-item'><FontAwesomeIcon className='repo-detail-icon' icon={faStar} />Stars: {repoDetails.watchers_count}</h2>
              <h2 className='repo-detail-item'><FontAwesomeIcon className='repo-detail-icon' icon={faCodeFork} />Forks: {repoDetails.forks_count}</h2>
            </div>
        </div>
      )
}

export default RepoDetailPage; 