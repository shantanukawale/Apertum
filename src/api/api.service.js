import BaseApi from "./baseApi.service";
import { API_ROUTES } from "./api.constants";

class Api extends BaseApi {
  makeUrl = (path) => {
    //Should usually be stored in a .env file
    return 'https://apertum-interview.herokuapp.com/api'+ path
  }

  signIn = async(accountId, password) =>{
    const options = {
      url: this.makeUrl(API_ROUTES.LOGIN),
      method: 'POST',
      body: {
        accountId: accountId,
        pswd: password
      }
    }
    return await this.makeRequest(options)
  }

  getUsers = async() =>{
    const options = {
      url: this.makeUrl(API_ROUTES.GET_USERS),
      method: 'GET'
    }
    return await this.makeRequest(options)
  }
  
}
const ApiService = new Api();
Object.freeze(ApiService);

export default ApiService;