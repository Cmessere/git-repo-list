import * as React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = ({message}) => {
    return(
        <div className="error-page">
            <h1 className="error-title">Ops...Something went wrong 😭</h1>
            <h2 className="error-subtitle">{message}</h2>
            <Link className='repo-detail-link' to={'/'}>Go back</Link>
        </div>
      )
}

export default ErrorPage; 