import React from "react";
import { v4 as uuid } from 'uuid';

function IndividualActor({name, moviesArray}) {

    const moviesList = moviesArray.map((movie)=><li key={uuid()}>{movie}</li>);

    return(
        <div>
            <p>{name}</p>
            <ul>{moviesList}</ul>
        </div>
    );
}

export default IndividualActor;