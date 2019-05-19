import React from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";

import InputGroup from "../InputGroup/InputGroup";

import validation from "./validation";

const AddGroupForm = ({ location }) => (
  <Formik
    initialValues={{ name: "", link: "", description: "", location }}
    validationSchema={validation}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
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
