import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { reposListPromise } from '../Utilities/Api';
import { FetchError, RepoListData, RepoListParams } from '../Utilities/Types';
import { faStar, faCodeFork } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { capitalizeString } from '../Utilities/UtilityFunctions';
import ReactPaginate from 'react-paginate';
import ErrorPage from './ErrorPage';
import LoadingPage from './LoadingPage';

const RepoListPage = () => {
    const params:RepoListParams = useParams()
    const itemsPerPage:number = 5;

    const [reposList, setReposList] = React.useState([] as RepoListData[] )
    const [error, setError] = React.useState({isError:false} as FetchError)
    const [isLoading, setIsLoading] = React.useState(true as Boolean)
    const [currentItems, setCurrentItems] = React.useState([] as RepoListData[]);
    const [pageCount, setPageCount] = React.useState(0 as number);
    const [itemOffset, setItemOffset] = React.useState(0 as number);

    React.useEffect(() => {
        reposListPromise(params.owner, params.type)
          .then((response:any)=>{
            setReposList(response.data)
          })
          .catch((e: FetchError) => {
            setError({isError:true, message:e.message})
          })
          .finally(() => setIsLoading(false))  
    }, [params])
  
    
    React.useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(reposList.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(reposList.length / itemsPerPage));

    }, [itemOffset, itemsPerPage, params, reposList]);
  

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % reposList.length;
      setItemOffset(newOffset);
    };

    if(isLoading){
      return(
        <LoadingPage />
      )
    }
    if(error.isError){
      return(
        <ErrorPage message={error.message} />
      )
    }

    if(reposList.length === 0){
      return(
        <div className="error-page">
          <h1 className="error-title">It seems like there is nothing here... 😭</h1>
          <Link className='repo-detail-link' to={'/'}>Go back</Link>
      </div>
      )
    }
    return (
        <div className="repo-list-page">
            <h1 className="repo-list-title">{capitalizeString(params.owner)}'s Repos List</h1>
            <ul className="repo-list-container">
                {currentItems.map(r => 
                    <li key={r.name} className='repo-list-item'>
                        <Link className='repo-list-label' to={`/repos/${params.owner}/${r.name}`}>{capitalizeString(r.name)}</Link>
                        <p className='repo-icon-label'><FontAwesomeIcon className='repo-detail-icon' icon={faStar} /> {r.watchers_count}</p>
                        <p className='repo-icon-label'><FontAwesomeIcon className='repo-detail-icon' icon={faCodeFork} /> {r.forks_count}</p>
                    </li>)}
            </ul>
            <ReactPaginate
              className="repo-list-pagination"
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<"
              breakClassName={'pagination-item'}
              breakLinkClassName={'pagination-link'}
              containerClassName={'pagination'}
              pageClassName={'pagination-item'}
              pageLinkClassName={'pagination-link'}
              previousClassName={'pagination-previous'}
              previousLinkClassName={'pagination-previous'}
              nextClassName={'pagination-next'}
              nextLinkClassName={'pagination-next'}
              activeClassName={'pagination-active'}
              activeLinkClassName={'pagination-active'}
              renderOnZeroPageCount={undefined}
            />
        </div>
      )
}



export default RepoListPage; 