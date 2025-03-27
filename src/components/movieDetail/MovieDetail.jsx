import { useParams, Link } from "react-router-dom";
import React from "react"
import './MovieDetails.css';

const MovieDetail = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((movie) => movie.title === title);

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerURL}
        title={movie.title}
        //frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetail;