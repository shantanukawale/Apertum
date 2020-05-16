import request from "axios";

export default class BaseApi {
	makeRequest = async (options) => {

		const requestOptions = {
			method: options.method,
			url: options.url,
			headers: options.headers ?{ ...this.getdefaultHeaders() , ...options.headers } : this.getdefaultHeaders(),
			data: options.body || {},
			timeout: 60000,
			json: true		
		};
		
		try {
			return (await request(requestOptions)).data
		} catch (error) {
			if (error && error.response && error.response.status === 403) {
				localStorage.removeItem('token')
				window.location.pathname = '/';
			}
		}
	};

	getdefaultHeaders = () => {
		return {
				'accept': 'application/json',
				'content-type': "application/json",
				'cache-control':  'no-cache',
				'authorization': localStorage.getItem('token') ? 'Bearer '+localStorage.getItem('token') : '',
			}
		}
}