import React from "react";
import { Link } from "@reach/router";

import { useStateValue } from "../service";

import ErrorBoundary from "../components/ErrorBoundary";
import AddGroupForm from "../components/AddGroupForm/AddGroupForm";

const AddGroupPage = () => {
  const [{ location }] = useStateValue();

  return (
    <section className="container">
      <h2 className="app-section-title">Adicionar Grupo</h2>
      <ErrorBoundary>
        <AddGroupForm location={location} />
      </ErrorBoundary>
      <Link to="/" className="app-link">
        &larr; Voltar
      </Link>
    </section>
  );
};

export default AddGroupPage;
