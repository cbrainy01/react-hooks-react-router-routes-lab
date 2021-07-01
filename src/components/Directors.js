import React from "react";
import { directors } from "../data";
import IndividualDirector from "./IndividualDirector";

function Directors() {
  
  const directorsList = directors.map( (director)=> <IndividualDirector key={director.name} name={director.name} moviesArray={director.movies}/> );
  return (
  <div>
    <h1>Directors Page</h1>
    {directorsList}
  </div>);
}

export default Directors;
