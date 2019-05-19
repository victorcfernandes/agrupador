const API_URL = "http://www.geoplugin.net/json.gp";

export const getLocationPermission = async () => {
  const status =
    typeof navigator !== "undefined"
      ? await navigator.permissions.query({ name: "geolocation" })
      : "";

  return status;
};

export const getPositionByGeoIP = async () => {
  const response = await fetch(API_URL);
  const jsonResponse = await response.json();
  const { geoplugin_latitude: lat, geoplugin_longitude: lng } = jsonResponse;
  return { lat, lng };
};

export const getPositionByGeolocation = () =>
  new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude: lat, longitude: lng } = position.coords;
        resolve({ lat, lng });
      },
      err => {
        reject(err);
      }
    )
  );

export const getPosition = async () =>
  // if browser does not support geolocation api fallback to geoIp service
  "geolocation" in navigator ? getPositionByGeolocation() : getPositionByGeoIP();

export default {
  getPositionByGeoIP,
  getPositionByGeolocation,
  getPosition,
  getLocationPermission
};
