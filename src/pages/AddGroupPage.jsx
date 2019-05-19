import React from "react";

import { useStateValue } from "../service";

import AddGroupForm from "../components/AddGroupForm/AddGroupForm";

const AddGroupPage = () => {
  const [{ location }] = useStateValue();

  return (
    <section className="container">
      <h2 className="app-section-title">Adicionar Grupo</h2>
      <AddGroupForm location={location} />
    </section>
  );
};

export default AddGroupPage;
