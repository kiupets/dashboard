import axios from 'axios';
export const baseUrl = process.env.REACT_APP_BACKEND_URL;
const urlParams = new URLSearchParams(window.location.search);
const dep_id = urlParams.get('dep_id');
const session_id = urlParams.get('session_id');
const headers = {
	'X-Dep-Id': '3953',
	'X-Session-Id': 'f679ce9da6a34653da1dc12776675299a983e500c3f658e9477cd16c58906b47'
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
