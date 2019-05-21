import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const StatusMessage = ({ type, message }) => (
  <h3 className={`status-message status-message--${type}`}>{message}</h3>
);

StatusMessage.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default StatusMessage;
