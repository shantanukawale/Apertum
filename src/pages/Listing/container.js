import React from 'react'
import ListingComponent from './component'
import ApiService from '../../api/api.service'
import Cookies from 'universal-cookie';

export default class ListingContainer extends React.Component{
  state = {
    users: []
  }

  getUsers = () => {
    ApiService.getUsers()
    .then((data) => {
      this.setState({users: data})
    })
  }

  logout = () => {
    const cookies = new Cookies();
    cookies.remove('token');
    window.location.pathname = '/'
  }

  componentDidMount(){
    this.getUsers()
  }
  render(){
    return(
      <ListingComponent
        users={this.state.users}
        logout={this.logout}
      />
    )
  }
}