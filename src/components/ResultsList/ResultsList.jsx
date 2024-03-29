import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

import ResultItem from "../ResultItem/ResultItem";

import Paginator from "../Paginator/Paginator";

const ResultsList = ({ results, resultCount }) => {
  const hasMoreResults = resultCount > results.length;

  return (
    <>
      <ul className="results-list">
        {results.map(result => (
          <ResultItem
            key={result.id}
            id={result.id}
            name={result.name}
            description={result.description}
            link={result.link}
            distance={result.distance}
          />
        ))}
      </ul>
      {hasMoreResults && <Paginator />}
    </>
  );
};

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
