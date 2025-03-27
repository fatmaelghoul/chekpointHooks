import react from "react";
import PropTypes from "prop-types";
//import MovieCard from "../moviecard/MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.title}>
          <h3>{movie.title}</h3>
          <img src={movie.posterURL} alt={movie.title} />
          <p>{movie.description}</p>
          <Link to={`/movie/${movie.title}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

// Props validation
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      posterURL: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MovieList;