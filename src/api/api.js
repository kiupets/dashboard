import axios from "axios";
export const baseUrl = process.env.REACT_APP_BACKEND_URL;
const urlParams = new URLSearchParams(window.location.search);
// const dep_id = urlParams.get("dep_id");
// const session_id = urlParams.get("session_id");
const headers = {
  "X-Dep-ID": 5679,
  "X-Session-ID": "4b21d4088c80702fffeb288c7c669a59e51bbbc488eed410f08b06176e7552e1",
};
const get = async (path) => {
  const response = await axios.get(`${baseUrl}${path}/`, { headers });
  const { data } = await response;
  return data;
};
export const api = {
  getLocationTags: () => get("locations_tags"),
  getLocations: () => get("locations"),
  getDataTable: () => get("table"),
};