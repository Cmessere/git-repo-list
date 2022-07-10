import * as React from 'react';
import { cleanSearchValue } from '../Utilities/UtilityFunctions';

import { useHistory } from 'react-router-dom';

function SearchPage() {

  const [searchValue, setSearchValue] = React.useState("" as string)

  let history = useHistory()

  const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault()
    const cleanedValue = cleanSearchValue(searchValue)
    history.push(`/repos/${cleanedValue}`)
  }

  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setSearchValue(e.target.value)
  }
  return (
    <div className='search-page'>
      <div className='search-container'>
        <form className='search-form'  onSubmit={handleSubmit}>
          <h2 className='search-subtitle'>Input the owner and the repository name:</h2>
          <input  className='search-input' type="text" value={searchValue} onChange={handleSearch} />
        </form>
      </div>
    </div>
  );
}

export default SearchPage;