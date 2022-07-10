import * as React from 'react';
import { capitalizeString } from '../Utilities/UtilityFunctions';

const UserListComponent = ({users}) => {
    return(
        <div>
            <ul className='user-list'>
                {users.map(u => <li className='user-list-item'><p className='user-list-paragraph'>{capitalizeString(u.login)}</p><img src={u.avatar_url} alt="Avatar" className="avatar"/> </li>)}
            </ul>
        </div>
      )
}

export default UserListComponent; 