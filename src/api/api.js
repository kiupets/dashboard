import axios from 'axios';
export const baseUrl = process.env.REACT_APP_BACKEND_URL;
const urlParams = new URLSearchParams(window.location.search);
// const dep_id = urlParams.get('dep_id');
// const session_id = urlParams.get('session_id');
const headers = {
	'X-Dep-Id': 3953,
	'X-Session-Id': '3dad239381b62dd88cdca3fb2535f620f92982aeff619c9888959800e89d1072'
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
