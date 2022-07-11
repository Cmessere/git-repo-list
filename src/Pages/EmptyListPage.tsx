import * as React from 'react';
import { Link } from 'react-router-dom';

const EmptyListPage = () => {
    return(
        <div className="empty-page">
          <h1 className="empty-title">It seems like there is nothing here... 🙊</h1>
          <Link className='repo-detail-link' to={'/'}>Go back</Link>
        </div>
      )
}

export default EmptyListPage; 