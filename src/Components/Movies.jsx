import React, { useState } from "react";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";
import SingleMovie from "./SingleMovie";
const Movies = () => {
  const { movies,isLoading,iserror} = useGlobalContext();
  const [selectedModelId,setSelectedModelId]= useState(null)
  const [showModel,setShowModel]= useState(false)
 
const handleOnClick=(id)=>{
    setSelectedModelId(id)
    setShowModel(true)
}
const handleClose=(id)=>{
    setSelectedModelId(id)
    setShowModel(false)
}
  return (
    
    
    <section className="container ">
      {iserror.show ? (
  <h2>Error: {iserror.msg}</h2>
) : isLoading ? (
        <div className="d-flex justify-content-center">
  <div className="spinner-border" role="status">
    <span className="sr-only"></span>
  </div>
</div>
      ) : (
    <div className="row" >
      
      {movies.map((curentmovie) => {

        const movie_title=(curentmovie.Title).substring(0,15)
       const movieName= movie_title.length>=15?`${movie_title}...`:movie_title

        return (
          
          <div className="col-md-4 col-lg-3 " key={curentmovie.imdbID} >
          <div   className="mb-4 ms-4 h-90 p-4 card movie-card" onClick={()=>handleOnClick(curentmovie.imdbID)}>
            <h2 className="fs-6 fs-md-4 text-center movie-text ">{movieName}</h2>
            <img src={curentmovie.Poster} alt="" />
          </div>
          </div>
        );
      })}
    </div>)}
    {showModel &&<SingleMovie id={selectedModelId} onClose={handleClose}></SingleMovie>}
    </section>
  );
};
export default Movies;
