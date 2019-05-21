import queryString from "query-string";

const { REACT_APP_API_URL } = process.env;

const getGroups = async ({ limit = 10, page = 1, lat, lng, radius = 1 }) => {
  const offset = (page - 1) * limit;

  const params = queryString.stringify({
    limit,
    offset,
    lat,
    lng,
    radius
  });

  const response = await fetch(`${REACT_APP_API_URL}/search?${params}`);
  const data = await response.json();

  return data;
};

export default getGroups;
