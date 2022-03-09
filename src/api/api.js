import axios from 'axios';
export const baseUrl = process.env.REACT_APP_BACKEND_URL;
const urlParams = new URLSearchParams(window.location.search);
const dep_id = urlParams.get('dep_id');
const session_id = urlParams.get('session_id');
const headers = {
	'X-Dep-Id': 5679,
	'X-Session-Id': 'cdb9b62c2ae292fac13120edde07c21d9a77a1f016ffcc23e4237a09c9f771df'
};
const get = async (path) => {
	const response = await axios.get(`${baseUrl}${path}/`, { headers });
	const { data } = await response;
	return data;
};
export const api = {
	getLocationTags: () => get('locations_tags'),
	getLocations: () => get('locations'),
	getDataTable: () => get('table')
};
