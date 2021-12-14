import React, {useState} from 'react';
import StarRatingComponent from 'react-star-rating-component';

const NavBar = ({handleSearch})=> {
    const [movie, setMovie] = useState({
        Title: "",
        ImageMovies: "",
        Descreption: "",
        PosterURL: "",
        rating:""
    });
    const[title,setTitle] = useState('');
    const[rating,setRating] = useState(0);
return(
    <div className="nav">
        <h1>Movies App</h1>
        <div className="block">
        <StarRatingComponent className="rating"
        starCount={5}
        value={rating}
        onStarClick={(value)=>{
            setRating(value)
            handleSearch(title,value)
            }}
        />
    <input type="text" placeholder="Search" name="Title" value={title} onChange={(e) => {
        setTitle(e.target.value)
        handleSearch(e.target.value,rating)
        
        }}></input>
    <button onClick={()=> handleSearch(title,rating)}>Search</button>
    </div>
</div>
)

}

export default NavBar;