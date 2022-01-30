import axios from "axios";
export const baseUrl = process.env.REACT_APP_BACKEND_URL;
const urlParams = new URLSearchParams(window.location.search);
// const dep_id = urlParams.get("dep_id");
// const session_id = urlParams.get("session_id");
const headers = {
  "X-Dep-ID": 5679,
  "X-Session-ID": "153d382cf41e55ad480aaeeb521e37bce1ece85e41c57ee8c4af02ff011c2f1f",
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