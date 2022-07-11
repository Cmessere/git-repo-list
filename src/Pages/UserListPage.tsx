import * as React from 'react';
import UserListComponent from '../Components/UserListComponent';

const UserListPage = ({users, organizations}) => {
    return(
        <div className='user-list-page'>
            <div className='user-list-title-container'>
                <h2 className='user-list-title'>Random repositories</h2>
            </div>
            <div className='user-list-container'>
                <UserListComponent users={users} type={"users"}/>
                <UserListComponent users={organizations} type={"orgs"}/>
            </div>
        </div>
      )
}

export default UserListPage; 