import './App.css';
import MoviesList from  './Components/MoviesList';
import MovieCard from './Components/MovieCard';
import Filter from './Components/Filter';
import Navbar from './Components/Navbar';
import Description from './Components/Description';
import BandeAnnonce from './Components/BandeAnnonce';
import React, {useState} from 'react';
import {Route,Routes} from 'react-router-dom'
function App() {
  const[movies,setMovies] = useState([
    { id: Math.random(), 
      Title: "Harry Potter",
      Description :"A clash between good and evil awaits as young Harry (Daniel Radcliffe), Ron (Rupert Grint) and Hermione (Emma Watson) prepare for a final battle against Lord Voldemort (Ralph Fiennes). Harry has grown into a steely lad on a mission to rid the world of evil.",
      PosterURL : "https://www.youtube.com/watch?v=40TyopuvO1Ys",
      rating : "5",
      ImageMovies : "https://d3tvwjfge35btc.cloudfront.net/Assets/64/760/L_p0018276064.jpg",
      Annonces: "https://www.youtube.com/embed/mObK5XD8udk"
  }, 

        { id:  Math.random(), 
          Title: "Charlie St Cloud",
          Description :"Charlie St. Cloud (Zac Efron) is a small-town sailing hero of whom great things are expected. But he loses all ambition after a car accident that he “miraculously” survives but kills his kid brother, Sam (Charlie Tahan). Afterward, to quote from another film, Charlie sees dead people.",
          PosterURL : "https://www.youtube.com/watch?v=-jMD4hq04jY",
          rating : "3",
          ImageMovies: "https://www.globsalstore.uk/assets/images/charliest.jpg",
          Annonces : "https://www.youtube.com/embed/KyplZ7b7UfY"

          },

            { id:  Math.random(), 
              Title: "The Hangover",
              Description :"The Hangover tells the story of Phil Wenneck, Stu Price, and Alan Garner, who travel to Las Vegas for a bachelor party to celebrate the impending marriage of their friend, Doug Billings. However, Phil, Stu, and Alan have no memory of the previous night's events and must find Doug before the wedding can take place.",
              PosterURL : "https://www.youtube.com/watch?v=11zRcQuNaJc",
              rating : "2",
              ImageMovies: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/18/1493824456-hangover.jpg",
              Annonces : "https://www.youtube.com/embed/tcdUhdOlz9M"
              }, 
              { id:  Math.random(), 
                Title: "The Basketball Diaries",
                Description :"The Basketball Diaries is a 1995 American biographical crime drama film directed by Scott Kalvert and based on an autobiographical novel by the same name written by Jim Carroll. It tells the story of Carroll's teenage years as a promising high school basketball player and writer who develops an addiction to heroin.",
                PosterURL : "https://www.youtube.com/watch?v=11zRcQuNaJc",
                rating : "4",
                ImageMovies: "https://upload.wikimedia.org/wikipedia/en/2/26/The_Basketball_Diaries_Poster.jpg",
                Annonces : "https://www.youtube.com/embed/-Zc7T0vUpj0"
                }
  ]);

        const [movie, setMovie] = useState({
          Title: "",
          ImageMovies: "",
          Descreption: "",
          PosterURL: "",
          Rating:""
        });

      const addMovie = (movieAdd) => {
        setMovies([...movies, movieAdd]);
      };

      const handleSearch= (Title,rating) =>{
        const mv = movies.filter((item) => (item.Title.includes(Title) ) && (item.rating >= rating)) 
        setMovies(mv)
      }

      const handleChange = (e) =>{
        setMovie({...movie, [e.target.name]: e.target.value})
      }

      const handleSubmit = (e) =>{
        e.preventDefault()
        addMovie({...movie})
      };
  return (
    <div className="App"> 
        <Navbar addMovie={addMovie} handleSearch={handleSearch} />
        <Routes>
        <Route exact path='/Description/:description' element={<Description movies={movies}/>}>
        <Route path='' element={<BandeAnnonce movies={movies}/>}/>
        </Route>
        <Route path='/' element={<><MoviesList  movies={movies}/> <MovieCard handleChange={handleChange} handleSubmit={handleSubmit}/> </>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
