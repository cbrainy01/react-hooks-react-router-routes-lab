import React from "react";
import { v4 as uuid } from 'uuid';

function IndividualMovie({title, time, genresArray}) {
   const moviesGenres = genresArray.map( (genre) => <li key={uuid()}>{genre}</li> );
    return(
        <div>
            <h2>{title}</h2>
            <p>Movie length: {time}mins</p>
            <ul>Genres{moviesGenres}</ul>
        </div>
    );
}

export default IndividualMovie;