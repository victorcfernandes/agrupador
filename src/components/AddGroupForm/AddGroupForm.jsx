import React from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";

import InputGroup from "../InputGroup/InputGroup";

import validation from "./validation";

const { REACT_APP_API_URL } = process.env;

const AddGroupForm = ({ location }) => (
  <Formik
    initialValues={{ ...location, name: "", link: "", description: "" }}
    validationSchema={validation}
    onSubmit={async (values, { setSubmitting }) => {
      const fetchParams = {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "content-type": "application/json" }
      };

      const response = await fetch(`${REACT_APP_API_URL}/groups/new`, fetchParams);

      const data = await response.json();

      console.log("====================================");
      console.log(data);
      console.log("====================================");

      setSubmitting(false);
    }}>
    {({ isSubmitting }) => (
      <Form>
        <InputGroup name="name" id="name" label="Nome do grupo*" labelClass="animated" />
        <InputGroup name="link" id="link" label="Link do grupo*" labelClass="animated" />
        <InputGroup
          name="description"
          id="description"
          label="Descrição*"
          component="textarea"
          inputClass="textarea"
          labelClass="animated"
        />
        <input type="submit" value="Adicionar" className="app-btn" disabled={isSubmitting} />
      </Form>
    )}
  </Formik>
);

AddGroupForm.propTypes = {
  location: PropTypes.shape({ lat: PropTypes.number.isRequired, lng: PropTypes.number.isRequired })
    .isRequired
};

export default AddGroupForm;
