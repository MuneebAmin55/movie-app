import React from 'react'
import { useGlobalContext } from './context';

 const Search = () => {
  const { query,setQuery} = useGlobalContext();
  const onSubmitHandle=(e)=>{
       e.preventDefault()
  }
  const onchangeHandle=(e)=>{
       setQuery(e.target.value)
  }
  return (
    
    <div className='searchbar'>
      <h1>SEARCH MOVIE HERE</h1>
      <form action="" onSubmit={onSubmitHandle}>
      <input type="text" placeholder='search something' value={query} onChange={onchangeHandle}/>
      </form></div> 
  )
}
export default Search