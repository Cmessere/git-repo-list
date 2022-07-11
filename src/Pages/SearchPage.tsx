import * as React from 'react';
import { checkInput, cleanSearchValue } from '../Utilities/UtilityFunctions';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useHistory } from 'react-router-dom';

function SearchPage() {

  const [searchValue, setSearchValue] = React.useState("" as string)
  const [searchError, setSearchError] = React.useState(false as boolean)
  const [searchClass, setSearchClass] = React.useState("search-input" as string)

  let history = useHistory()

  const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault()
    const validInput = checkInput(searchValue)
    const cleanedValue = cleanSearchValue(searchValue)

    if(validInput)
      history.push(`/repos/${cleanedValue}`)
    else{
      setSearchClass("search-input-error")
      setSearchError(true)
    }
  }

  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setSearchValue(e.target.value)
    setSearchError(false)
    setSearchClass("search-input")
  }
  return (
    <div className='search-page'>
      <div className='search-container'>
        <form className='search-form'  onSubmit={handleSubmit}>
          <h2 className='search-subtitle'>Input the owner and the repository name :</h2>
          <h4 className='search-subtitle-small'>(divided either by space or a slash e.g "Facebook react", "Facebook/react")</h4>
          <div className='search-input-container'>
            <input className={searchClass} type="text" value={searchValue} onChange={handleSearch} />
            <button className='search-button'>Search<FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} /></button>
          </div>
          {searchError && <label className='search-error'>The inserted value does not match the syntax "Owner Repo" or "Owner/Repo"</label>}
        </form>
      </div>
    </div>
  );
}

export default SearchPage;