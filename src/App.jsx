// src/App.js
import { useState } from "react";
import MovieList from "./components/movieList/MovieList";
import Filter from "./components/filter/Filter";
import AddMovie from "./components/addMovie/AddMovie";
import "./App.css"

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
      rating: 9,
    },
    {
      title: "Interstellar",
      description: "A sci-fi adventure through space and time.",
      posterURL: "https://resizing.flixster.com/47rDB5jGZrHWyRMRYMZKenbTcHU=/fit-in/705x460/v2/https://resizing.flixster.com/Y_sqtbGDcspx4oob3nD-lojSLjc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2YyMWZjZTQ2LWQwZGItNGRhMi1hZjg3LWFhZDQ1YWU1OTQ2NC53ZWJw",
      rating: 8.6,
    }, {
        title: "The Dark Knight",
        description: "Batman faces the Joker in Gotham City.",
        posterURL: "https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg",
        rating: 9.1,
      },
      {
        title: "Avatar",
        description: "Avatar is a 2009 American epic science fiction film directed, written, produced, and co-edited by James Cameron",
        posterURL: "https://m.media-amazon.com/images/M/MV5BNmQxNjZlZTctMWJiMC00NGMxLWJjNTctNTFiNjA1Njk3ZDQ5XkEyXkFqcGc@._V1_.jpg",
        rating: 8.2,
      },
      {
        title: "Titanic",
        description: "A love story set on the ill-fated Titanic.",
        posterURL: "https://m.media-amazon.com/images/M/MV5BYTk4YWRhMTctMGRjNS00MDkwLTgxNTEtNGE5MjAzMDk5ZTFlXkEyXkFqcGc@._V1_.jpg",
        rating: 7.9,
      },
      {
        title: "Joker",
        description: "The origin story of Gotham's iconic villain.",
        posterURL: "https://fr.web.img6.acsta.net/pictures/19/09/03/12/02/4765874.jpg",
        rating: 8.5,
      },
      {
        title: "The Matrix",
        description: "A hacker discovers the shocking truth about reality.",
        posterURL: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
        rating: 8.7,
      },
      {
        title: "The Godfather",
        description: "A classic mafia drama about power and family.",
        posterURL: "https://m.media-amazon.com/images/I/41+eK8zBwQL._AC_SY450_.jpg",
        rating: 9.2,
      },
      {
        title: "Avengers: Endgame",
        description: "The Avengers unite to defeat Thanos.",
        posterURL: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
        rating: 8.4,
      },
    
    ]);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );

  return (
    <div className="App">
      <h1>My Movie App</h1>
      <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
      <MovieList movies={filteredMovies} />
      <AddMovie addMovie={addMovie} />
    </div>
  );
};

export default App;
