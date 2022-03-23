import axios from 'axios';
export const baseUrl = process.env.REACT_APP_BACKEND_URL;
const urlParams = new URLSearchParams(window.location.search);
// const dep_id = urlParams.get('dep_id');
// const session_id = urlParams.get('session_id');
const headers = {
	'X-Dep-Id': 5679,
	'X-Session-Id': 'd66faee156074bb2cd31ca2f3351d5e291d5c2dc322097be227b5613ba699551'
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
