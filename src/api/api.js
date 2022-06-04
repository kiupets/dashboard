import axios from 'axios';
export const baseUrl = process.env.REACT_APP_BACKEND_URL;
const urlParams = new URLSearchParams(window.location.search);
const dep_id = urlParams.get('dep_id');
const session_id = urlParams.get('session_id');
const headers = {
	'X-Dep-Id': 3953,
	'X-Session-Id': '3327843eb4af53fba0d811d7f91ef829472b1dd309a40d943224c0933eb7966a'
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
