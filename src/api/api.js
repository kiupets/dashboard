export const baseUrl = process.env.REACT_APP_BACKEND_URL;
const urlParams = new URLSearchParams(window.location.search);
const dep_id = urlParams.get('dep_id');
const session_id = urlParams.get('session_id');
const headers = {
    'X-Dep-ID': 910740192
    ,
    'X-Session-ID': 14291
    ,
}



class FetchError extends Error {
    constructor(resource, ...params) {
        super(...params);
        this.name = 'fetchError';
        this.resource = resource;
    }
}
const get = async (path, resource) => {
    try {
        const response = await fetch(`${baseUrl}/${path}`, { headers })
            .then(res => res.json())
            .then(data => console.log(data))


    } catch (error) {
        console.log(error);
        throw new FetchError(resource);
    }
}

export const api = {
    getSessionInfo: () => get('session_info', 'sessionInfo'),

}