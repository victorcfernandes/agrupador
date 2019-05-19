import React from "react";
import PropTypes from "prop-types";

import { Field, ErrorMessage } from "formik";
import "./styles.scss";

const InputGroup = ({ type, name, id, inputClass, labelClass, component, label }) => {
  return (
    <div className={"input-group"}>
      <Field
        type={type}
        name={name}
        id={id}
        className={`input-group__input input-group__input--${inputClass}`}
        component={component}
        required
      />

      <label className={`input-group__label input-group__label--${labelClass}`} htmlFor={id}>
        {label}
      </label>
      <ErrorMessage className="input-group__error" name={name} component="div" />
    </div>
  );
};

InputGroup.defaultProps = {
  component: "input",
  inputClass: "",
  labelClass: "",
  type: "text",
  id: "",
  label: ""
};

InputGroup.propTypes = {
  component: PropTypes.string,
  inputClass: PropTypes.string,
  labelClass: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.string
};

export default InputGroup;
