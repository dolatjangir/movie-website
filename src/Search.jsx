import React from 'react'
import { useGlobleContext } from './context'

function Search() {
  const {query,setQuery,isError} = useGlobleContext();
  return (
    <>
  <section className='search-section'>

    <h2 className='text-2xl font-semibold'>Search Your Favourite Movie</h2>
    <form action='#' onSubmit={(e) => e.preventDefault()}>
      <div>
      <input className='search-box' type='text' placeholder='search here'
      value={query}
      onChange={(e) => setQuery(e.target.value)}/>
      </div>
    </form>
  <div className='card-error'>
    <p className='card-error-p'>{isError.show && isError.msg}</p>
  </div>
  </section>
  
      
    </>
  )
}

export default Search
