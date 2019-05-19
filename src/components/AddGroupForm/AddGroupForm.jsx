import React from "react";
import { Formik, Form } from "formik";

import InputGroup from "../InputGroup/InputGroup";

import validation from "./validation";

const AddGroupForm = () => (
  <Formik
    initialValues={{ name: "", link: "", description: "" }}
    validationSchema={validation}
    onSubmit={(values, setSubmitting) => {
      setSubmitting(false);
    }}>
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
      <input type="submit" value="Adicionar" className="app-btn" />
    </Form>
  </Formik>
);

export default AddGroupForm;
