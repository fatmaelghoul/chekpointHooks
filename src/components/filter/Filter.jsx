import React from "react";
import PropTypes from "prop-types";

const Filter = ({ setFilterTitle, setFilterRating }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title..."
        onChange={(e) => setFilterTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Minimum rating..."
        onChange={(e) => setFilterRating(Number(e.target.value))}
      />
    </div>
  );
};

// Props validation
Filter.propTypes = {
  setFilterTitle: PropTypes.func.isRequired,
  setFilterRating: PropTypes.func.isRequired,
};

export default Filter;
