import * as React from 'react';
import { Link } from 'react-router-dom';
import { capitalizeString } from '../Utilities/UtilityFunctions';

const UserListComponent = ({users, type}) => {
    return(
        <div className='user-list-conatiner'>
            <ul className='user-list'>
                {users.map(u => <li key={u.login} className='user-list-item'><Link className='user-list-paragraph' to={`/git-repo-list/list/${u.login}/${type}`}>{capitalizeString(u.login)}</Link><img src={u.avatar_url} alt="Avatar" className="avatar"/> </li>)}
            </ul>
        </div>
      )
}

export default UserListComponent; 