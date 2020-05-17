import React from 'react'
import LoginComponent from './component'
import ApiService from '../../api/api.service'
import Cookies from 'universal-cookie';

export default class LoginContainer extends React.Component{
  signIn =(accountId, password)=>{
    ApiService.signIn(accountId, password)
    .then((data) => {
      if(data && data.token) {
        const cookies = new Cookies();
        cookies.set('token', data.token, { path: '/'});
        //A httpOnly and secure cookie would be a better idea but I couldn't figure out how to do that.
        //Setting the options for secure and httpOnly as true just made the cookie disappear from the browser cookies.
      }
    })
    .then(()=>{
      window.location.pathname = window.location.pathname.replace('/list')
    })
  }
  render(){
    return(
      <LoginComponent
        signIn={this.signIn}
      />
    )
  }
}