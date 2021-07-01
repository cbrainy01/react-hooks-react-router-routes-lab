import React from "react";
import { movies } from "../data";
import IndividualMovie from "./IndividualMovie";

function Movies() {
  
  const moviesList = movies.map( (movie)=><IndividualMovie key={movie.title} title={movie.title} time={movie.time} genresArray={movie.genres}/>)
  
  return (
  <div>
    <h1>Movies Page</h1>
    {moviesList}
  </div>)
  ;
}

export default Movies;
