import React, { useEffect } from "react";

import AddGroupBtn from "../components/AddGroupBtn/AddGroupBtn";
import ResultsList from "../components/ResultsList/ResultsList";

import getGroups from "../service/search";

import { useStateValue } from "../service";

const HomePage = () => {
  const [{ results, location }, dispatch] = useStateValue();

  useEffect(() => {
    const getResults = async () => {
      const data = await getGroups(location);

      dispatch({
        type: "UPDATE_RESULTS",
        results: data
      });
    };

    getResults();
  }, [dispatch, location]);

  return (
    <section className="container">
      <AddGroupBtn />
      <h2 className="app-section-title">Grupos próximos</h2>
      <p className="app-paragraph">
        Esses são os grupos mais próximos de você em um raio de até 1Km. Clique num grupo para saber
        mais.
      </p>
      {results && <ResultsList results={results.data} resultCount={results.count} />}
    </section>
  );
};

export default HomePage;
