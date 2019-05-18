import React from "react";

import GeoButton from "../components/GeoButton/GeoButton";

const HomePage = () => (
  <section className="container">
    <p className="app-paragraph">
      Para ver a lista de grupos é só clicar no botão abaixo! Vai aparecer um pop-up pedindo sua
      permissão e aí é só aceitar, blz? Fica tranquilo que seus dados estão seguros. Prometo que a
      gente não vai passar nada pro Zuckerberg ;)
    </p>
    <GeoButton />
  </section>
);

export default HomePage;
