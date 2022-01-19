import axios from "axios";
export const baseUrl = process.env.REACT_APP_BACKEND_URL;
const urlParams = new URLSearchParams(window.location.search);
// const dep_id = urlParams.get("dep_id");
// const session_id = urlParams.get("session_id");
const headers = {
  "X-Dep-ID": '5679',
  "X-Session-ID": '671de1b2bf9f9ffb62262f034fc0db277e12eab99228a5d2b4135aad3b00f407',
};
const get = async (path) => {
  const response = await axios.get(`${baseUrl}${path}/`, { headers });
  const { data } = await response;
  return data;
};
export const api = {
  getLocationTags: () => get("locations_tags"),
  getLocations: () => get("locations"),
  getDataTable: () => get("table")
};
