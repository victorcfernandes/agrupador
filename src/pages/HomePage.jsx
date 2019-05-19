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
        data
      });
    };

    getResults();
  }, [dispatch, location]);

  return (
    <section className="container">
      <AddGroupBtn />
      <h2 className="app-section-title">Grupos próximos</h2>
      {results && <ResultsList results={results.data} />}
    </section>
  );
};

export default HomePage;
