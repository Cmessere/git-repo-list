import * as React from 'react';

const ErrorPage = ({message}) => {
    return(
        <div className="error-page">
            <h1 className="error-title">Ops...Something went wrong 😭</h1>
            <h2 className="error-subtitle">{message}</h2>
        </div>
      )
}

export default ErrorPage; 