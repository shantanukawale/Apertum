import React from 'react'
import ListingComponent from './component'
import ApiService from '../../api/api.service'

export default class ListingContainer extends React.Component{
  state = {
    users: []
  }

  getUsers = () => {
    ApiService.getUsers()
    .then((data) => {
      console.log(data)
      this.setState({users: data})
    })
  }

  logout = () => {
    localStorage.removeItem('token')
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