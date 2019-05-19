import React from "react";

import "./styles.scss";

import { getPosition } from "./geolocation";

const GeoButton = () => {
  // const [] = useState();
  return (
    <button className="geo-button" onClick={getPosition}>
      Ativar Geolocalização
    </button>
  );
};

export default GeoButton;
