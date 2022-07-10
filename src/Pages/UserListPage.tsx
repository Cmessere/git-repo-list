import * as React from 'react';
import UserListComponent from '../Components/UserListComponent';

const UserListPage = ({users, organizations}) => {
    return(
        <div className='user-list-page'>
            <div className='user-list-title-container'>
                <h2 className='user-list-title'>Random users</h2>
            </div>
            <div className='user-list-container'>
                <UserListComponent users={users} />
                <UserListComponent users={organizations} />
            </div>
        </div>
      )
}

export default UserListPage; 