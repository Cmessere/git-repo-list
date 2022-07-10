import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory()
    return(
        <div className='header-container'>
            <p onClick={() => history.push("/")} className='header-icon'><FontAwesomeIcon icon={faHouse} /></p>
            <h1 className='header-title'>GitHub Search</h1>
        </div>
      )
}

export default Header; 