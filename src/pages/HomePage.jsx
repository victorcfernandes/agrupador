import React from "react";

import AddGroupBtn from "../components/AddGroupBtn/AddGroupBtn";
import ResultsList from "../components/ResultsList/ResultsList";

const results = [
  {
    id: 1,
    name: "Garfo de EJCM",
    link: "https://chat.whatsapp.com/invite/",
    description:
      "lorem Tempor voluptate nisi et officia mollit cupidatat esse elit qui id commodo anim tempor deserunt. Nisi ipsum sunt sit ipsum duis sit laboris occaecat non nisi. Non proident sit nisi ipsum ullamco culpa labore incididunt minim ut eu ut. Labore eu cillum enim aliquip. Dolore eu incididunt eiusmod duis nostrud ullamco eu. Deserunt aute ex occaecat amet exercitation ea fugiat duis deserunt."
  },
  {
    id: 2,
    name: "Garfo de EJCM 2",
    link: "https://chat.whatsapp.com/invite/",
    description:
      "lorem Tempor voluptate nisi et officia mollit cupidatat esse elit qui id commodo anim tempor deserunt. Nisi ipsum sunt sit ipsum duis sit laboris occaecat non nisi. Non proident sit nisi ipsum ullamco culpa labore incididunt minim ut eu ut. Labore eu cillum enim aliquip. Dolore eu incididunt eiusmod duis nostrud ullamco eu. Deserunt aute ex occaecat amet exercitation ea fugiat duis deserunt."
  },
  {
    id: 3,
    name: "Garfo de EJCM 3",
    link: "https://chat.whatsapp.com/invite/",
    description:
      "lorem Tempor voluptate nisi et officia mollit cupidatat esse elit qui id commodo anim tempor deserunt. Nisi ipsum sunt sit ipsum duis sit laboris occaecat non nisi. Non proident sit nisi ipsum ullamco culpa labore incididunt minim ut eu ut. Labore eu cillum enim aliquip. Dolore eu incididunt eiusmod duis nostrud ullamco eu. Deserunt aute ex occaecat amet exercitation ea fugiat duis deserunt."
  }
];

const HomePage = () => {
  return (
    <section className="container">
      <AddGroupBtn />
      <h2 className="app-section-title">Grupos próximos</h2>
      <ResultsList results={results} />
    </section>
  );
};

export default HomePage;
