import axios from "axios";
export const baseUrl = process.env.REACT_APP_BACKEND_URL;
const urlParams = new URLSearchParams(window.location.search);
const dep_id = urlParams.get("dep_id");
const session_id = urlParams.get("session_id");
const headers = {
  "X-Dep-Id": dep_id,
  "X-Session-Id": session_id,
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
