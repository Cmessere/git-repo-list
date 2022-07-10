import * as React from 'react';
import { useParams } from 'react-router-dom';
import { RepoDetailParams } from '../Utilities/Types';

const RepoDetailPage = () => {

    const params:RepoDetailParams = useParams()

    return(
        <div >
            <h1>Welcome to {params.owner}'s repo page for {params.repo} </h1>
        </div>
      )
}

export default RepoDetailPage; 