import React from 'react'
import LoginComponent from './component'
import ApiService from '../../api/api.service'
export default class LoginContainer extends React.Component{
  signIn =(accountId, password)=>{
    ApiService.signIn(accountId, password)
    .then((data) => {
      if(data.token) localStorage.setItem('token',data.token)
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