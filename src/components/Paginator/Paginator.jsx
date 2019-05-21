import React, { useState } from "react";

import getGroups from "../../service/search";

import { useStateValue } from "../../service";

const Paginator = () => {
  const [{ location }, dispatch] = useStateValue();

  const [page, setPage] = useState(1);

  const getResults = async () => {
    const newPage = page + 1;
    const results = await getGroups({ ...location, page: newPage });

    dispatch({
      type: "UPDATE_RESULTS",
      results
    });

    setPage(newPage);
  };

  return (
    <button className="app-btn" onClick={getResults}>
      Carregar mais resultados
    </button>
  );
};

export default Paginator;
