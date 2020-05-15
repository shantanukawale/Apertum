import React from 'react';

export default class PageNotFound extends React.Component{
  render(){
    return(
      <img src='./pageNotFound.gif' onClick={(e)=>window.location.href = window.location.origin + '/'}/>
    )
  }
}