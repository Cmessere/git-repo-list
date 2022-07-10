import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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