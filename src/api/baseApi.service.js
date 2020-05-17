import request from "axios";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

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
        cookies.remove('token');
				window.location.pathname = '/';
			}
		}
	};

	getdefaultHeaders = () => {
		return {
				'accept': 'application/json',
				'content-type': "application/json",
				'cache-control':  'no-cache',
				'authorization': cookies.get('token') ? 'Bearer '+cookies.get('token') : '',
			}
		}
}