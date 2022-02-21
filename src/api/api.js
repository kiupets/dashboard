import axios from 'axios';
export const baseUrl = process.env.REACT_APP_BACKEND_URL;
const urlParams = new URLSearchParams(window.location.search);
// const dep_id = urlParams.get('dep_id');
// const session_id = urlParams.get('session_id');
const headers = {
	'X-Dep-Id': 5679,
	'X-Session-Id': 'd6f656ca37fd34738acfe125f9529e7245598c380a102527786d6b3e34ffd7ac'
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
