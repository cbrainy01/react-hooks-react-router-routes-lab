import React from "react";
import { actors } from "../data";
import IndividualActor from "./IndividualActor";

function Actors() {
  
  const actorsList = actors.map( (actor)=><IndividualActor key={actor.name} name={actor.name} moviesArray={actor.movies}/> );
  
  return (
  <div>
    <h1>Actors Page</h1>
    {actorsList}
  </div>
    );
}

export default Actors;
