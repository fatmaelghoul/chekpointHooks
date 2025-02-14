import React, { useState } from "react";
import PropTypes from "prop-types";

const AddMovie = ({ addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    
        title: "Stranger Things",
        description: "A group of kids uncover government secrets in their town.",
        posterURL: "https://fr.web.img4.acsta.net/pictures/22/05/18/14/31/5186184.jpg",
        rating: 8.7,
      },
  );

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-movie">
      <input type="text" name="title" placeholder="Title" onChange={handleChange} />
      <input type="text" name="description" placeholder="Description" onChange={handleChange} />
      <input type="text" name="posterURL" placeholder="Poster URL" onChange={handleChange} />
      <input type="number" name="rating" placeholder="Rating" onChange={handleChange} />
      <button onClick={() => addMovie(newMovie)}>Add Movie</button>
    </div>
  );
};

// Props validation
AddMovie.propTypes = {
  addMovie: PropTypes.func.isRequired,
};

export default AddMovie;
