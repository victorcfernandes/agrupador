import React, { useState } from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const ResultItem = ({ id, name, description, link }) => {
  const [active, setActive] = useState(false);

  return (
    <li className="result-item">
      <h3 className="result-item__name" onClick={() => setActive(!active)}>
        {name}
      </h3>
      <div
        className={`result-item__description ${active ? "result-item__description--active" : ""}`}>
        {description}
        <a
          href={link}
          className="app-btn result-item__btn"
          target="_blank"
          rel="noopener noreferrer">
          Entrar no grupo
        </a>
      </div>
    </li>
  );
};

ResultItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default ResultItem;
