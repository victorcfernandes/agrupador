import React from "react";
import { Router } from "@reach/router";

import { useStateValue } from "../../service";

import HomePage from "../../pages/HomePage";
import AddGroupPage from "../../pages/AddGroupPage";
import GeoButton from "../GeoButton/GeoButton";

const WelcomeGateway = () => {
  const [{ location }] = useStateValue();

  return !location ? (
    <section className="container">
      <h2 className="app-section-title">Bem vindo ao Agrupador!</h2>
      <p className="app-paragraph">Ache os grupos de Whatsapp mais próximos de você!</p>

      <p className="app-paragraph">
        Para ver a lista de grupos é só clicar no <strong>botão abaixo</strong>! Vai aparecer um
        pop-up pedindo sua permissão e aí é só aceitar, blz? Fica tranquilo que seus dados estão
        seguros. Prometo que a gente não vai passar nada pro Zuckerberg ;)
      </p>
      <GeoButton />
    </section>
  ) : (
    <Router>
      <HomePage path="/" />
      <AddGroupPage path="/adicionar" />
    </Router>
  );
};

export default WelcomeGateway;
