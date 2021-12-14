import React from 'react'
import{useNavigate,useLocation}from 'react-router-dom'
import {Link,Outlet} from 'react-router-dom'
const Description = ({movies}) => {
    const location = useLocation()
    const navigate = useNavigate();
    const movie = movies.find(el => location.state.id == el.id)
    return (
        <div className="description">
        <h1>{movie.Title}</h1>
        <h3>{movie.Description}</h3>
        <button onClick={()=> navigate(-1)}>go back</button>
        <Outlet/> 
        </div>
    )
}
export default Description;

