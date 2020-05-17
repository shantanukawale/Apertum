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
        cookies.set('token', data.token, { path: '/' });
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