import React from "react";

import "./styles.scss";

import { useStateValue } from "../../service";

import { getPosition } from "../../service/geolocation";

const GeoButton = () => {
  const [{ location }, dispatch] = useStateValue();

  const geolocate = async () => {
    const location = await getPosition();
    dispatch({
      type: "UPDATE_LOCATION",
      location
    });
  };

  return (
    <button className="geo-button" onClick={geolocate}>
      Ativar Geolocalização
    </button>
  );
};

export default GeoButton;
