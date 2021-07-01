import React from "react";
import { v4 as uuid } from 'uuid';

function IndividualDirector({name, moviesArray}) {

    const movies = moviesArray.map( (movie) => <li key={uuid()}>{movie}</li> );

    return(
        <div>
            <p>{name}</p>
            <ul>{movies}</ul>
        </div>
    );
}

export default IndividualDirector;