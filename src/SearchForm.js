import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  
  const {movies,query,setQuery,error } = useGlobalContext();

  return (
      <form className='search-form' onSubmit={ (e) => e.preventDefault()}>
          <h2>search movies</h2>
          <input 
            className='form-input'
            value={query}
            type="text"
            onChange={ (e) => setQuery(e.target.value)}
          />
        {error.show &&<div className='error'>{error.msg}</div> }
      </form>
  )

}

export default SearchForm
