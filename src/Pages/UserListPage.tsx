import * as React from 'react';
import UserListComponent from '../Components/UserListComponent';

const UserListPage = ({users, organizations}) => {
    return(
        <div className='user-list-page'>
            <UserListComponent users={users} />
            <UserListComponent users={organizations} />
        </div>
      )
}

export default UserListPage; 