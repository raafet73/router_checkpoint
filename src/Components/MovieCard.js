import React from 'react';


const MovieCard = ({handleChange,handleSubmit})=>{
    return(
        <div className="addMovies">
        <input type="text" placeholder="Title" name="Title"  onChange={ handleChange}></input>
        <input type="text" placeholder="Description" name="Description" onChange={ handleChange} ></input>
        <input type="text" placeholder="URL" name="PosterURL" onChange={ handleChange}></input>
        <input type="text" placeholder="Image's URL" name="ImageMovies" onChange={ handleChange}></input>
        <input type="text" placeholder="Rating" name="rating" onChange={handleChange}></input>
        <button type="submit" onClick={handleSubmit}>Submit</button>
       </div> 
    )
}

export default MovieCard;
