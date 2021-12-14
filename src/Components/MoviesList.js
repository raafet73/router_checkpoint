import React, {useState} from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from "react-router-dom"


const MoviesList= ({movies})=>{
    return(
        <div className="movies" >
            {movies.map((mv) => (
            <div className="groupes">
                <h1 className="title">{mv.Title}</h1>
                <img src={mv.ImageMovies} ></img>
                <h2>{mv.Description}</h2>
                <a href= {mv.PosterURL}> link Movies </a> <br/>
                <StarRatingComponent 
                    starCount={5}
                    value={mv.rating}
                /> <br/>
                <Link to={`/Description/${mv.Title}`} state={{id:mv.id}}> <button type="button"> Description </button></Link>
            </div>))}
        </div>
    )
}

export default MoviesList;