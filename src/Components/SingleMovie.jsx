import React, { useEffect, useState } from 'react'

import {API_URL,} from "./context.jsx"

const SingleMovie = ({id,onClose}) => {
     const [isLoading,setIsLoading] = useState(true)
    const [movies, setMovies]=useState("")
    
    
      const closeHandleButton=()=>{
        
        onClose()
      }
      const getData = async (url) => {
        try {
          const res = await fetch(url);
          const data = await res.json();
          
          if(data.Response==="True"){
            setIsLoading(false)
            setMovies(data)
            
          }
          
        } catch(error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getData(`${API_URL}&i=${id}`);
      }, [id]);
      
    return(
       
    <div class="card mb-3 singlemoviecard ">

  <div class="row g-0 cardContent">
      {isLoading ? (
        <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="sr-only"></span>
  </div>
</div>
      ) : ( <div class="row g-0 ">
    <div class="col-md-4 cardContent">
      <img src={movies.Poster} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{movies.Title}</h5>
        <p class="card-text">{movies.Released}</p>
        <p class="card-text"><small class="text-body-secondary">{movies.Genre}</small></p>
         <p class="card-text"><small class="text-body-secondary">{movies.imdbRating}</small></p>
          <p class="card-text"><small class="text-body-secondary">{movies.Country}</small></p>
          <div>
            
          <button type="button" class="btn btn-outline-success" onClick={closeHandleButton}>Go Back</button>
           </div>
      </div>
    </div>
    </div>)}
  </div>
</div>
       
      ) }
    
export default SingleMovie