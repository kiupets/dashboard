import axios from "axios";
export const baseUrl = process.env.REACT_APP_BACKEND_URL;
const urlParams = new URLSearchParams(window.location.search);
// const dep_id = urlParams.get("dep_id");
// const session_id = urlParams.get("session_id");
const headers = {
  "X-Dep-ID": 5679,
  "X-Session-ID": "278f93f1ab69238132218e624cc8f10384b05b1f3ee35bba1256865273739ac5",
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