import React from "react";

import GeoButton from "../components/GeoButton/GeoButton";
import AddGroupBtn from "../components/AddGroupBtn/AddGroupBtn";
import ResultsList from "../components/ResultsList/ResultsList";

import { useStateValue } from "../service";

const results = [
  {
    id: 1,
    name: "Garfo de EJCM",
    description:
      "lorem Tempor voluptate nisi et officia mollit cupidatat esse elit qui id commodo anim tempor deserunt. Nisi ipsum sunt sit ipsum duis sit laboris occaecat non nisi. Non proident sit nisi ipsum ullamco culpa labore incididunt minim ut eu ut. Labore eu cillum enim aliquip. Dolore eu incididunt eiusmod duis nostrud ullamco eu. Deserunt aute ex occaecat amet exercitation ea fugiat duis deserunt. Reprehenderit pariatur ex reprehenderit deserunt ipsum ut esse quis laboris aliqua."
  },
  {
    id: 2,
    name: "Garfo de EJCM 2",
    description:
      "lorem Tempor voluptate nisi et officia mollit cupidatat esse elit qui id commodo anim tempor deserunt. Nisi ipsum sunt sit ipsum duis sit laboris occaecat non nisi. Non proident sit nisi ipsum ullamco culpa labore incididunt minim ut eu ut. Labore eu cillum enim aliquip. Dolore eu incididunt eiusmod duis nostrud ullamco eu. Deserunt aute ex occaecat amet exercitation ea fugiat duis deserunt. Reprehenderit pariatur ex reprehenderit deserunt ipsum ut esse quis laboris aliqua."
  },
  {
    id: 3,
    name: "Garfo de EJCM 3",
    description:
      "lorem Tempor voluptate nisi et officia mollit cupidatat esse elit qui id commodo anim tempor deserunt. Nisi ipsum sunt sit ipsum duis sit laboris occaecat non nisi. Non proident sit nisi ipsum ullamco culpa labore incididunt minim ut eu ut. Labore eu cillum enim aliquip. Dolore eu incididunt eiusmod duis nostrud ullamco eu. Deserunt aute ex occaecat amet exercitation ea fugiat duis deserunt. Reprehenderit pariatur ex reprehenderit deserunt ipsum ut esse quis laboris aliqua."
  }
];

const HomePage = () => {
  const [{ location }, dispatch] = useStateValue();

  return (
    <section className="container">
      {!location ? (
        <>
          <h2 className="app-section-title">Bem vindo ao Agrupador!</h2>
          <p className="app-paragraph">Ache os grupos de Whatsapp mais próximos de você!</p>

          <p className="app-paragraph">
            Para ver a lista de grupos é só clicar no <strong>botão abaixo</strong>! Vai aparecer um
            pop-up pedindo sua permissão e aí é só aceitar, blz? Fica tranquilo que seus dados estão
            seguros. Prometo que a gente não vai passar nada pro Zuckerberg ;)
          </p>
          <GeoButton />
        </>
      ) : (
        <>
          <AddGroupBtn />
          <h2 className="app-section-title">Grupos próximos</h2>
          <ResultsList results={results} />
        </>
      )}
    </section>
  );
};

export default HomePage;
