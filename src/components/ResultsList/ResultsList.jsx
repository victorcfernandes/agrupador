import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const ResultsList = ({ results }) => (
  <ul className="results-list">
    {results.map(result => (
      <li className="results-list__item" key={result.id}>
        {result.name}
      </li>
    ))}
  </ul>
);

ResultsList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ResultsList;
