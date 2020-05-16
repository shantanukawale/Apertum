import React from 'react';
import {Card, Row, Col, Button} from 'reactstrap';

export default class ListingComponent extends React.Component{
  state = {
    users: [],
    filterStatus: false
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.users!==this.props.users) this.setState({users: nextProps.users})
  }
  render(){
    return(
      <Card
        style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        className='p-3'
      >
      <div className='d-flex justify-content-between mb-2'>
        <Button
          onClick={() => {
            if(!this.state.filterStatus){
              this.setState({
                users: this.state.users.filter(item=> item.age>=20 && item.age<=30 && (item.firstName+item.lastName).length>=9),
                filterStatus: true
              })
              //9 because there will be a space between firstName and the lastName
            }else{
              this.setState({users: this.props.users,filterStatus:false})
            }
          }}
        >
          {this.state.filterStatus ? "Remove Filter" : "Filter"}
        </Button>
        <Button
          onClick={(e)=>{
            this.props.logout()
          }}
        >
          Log Out
        </Button>
      </div>
      {this.state.users.map((item,idx) =>{
        return (
        <Card className='mb-1 p-2'>
          <Row>
            <Col>
              <b>First Name:</b> {item.firstName}
            </Col>
            <Col>
            <b>Last Name:</b> {item.lastName}
            </Col>
            <Col>
              <b>Age:</b> {item.age}
            </Col>
          </Row>
        </Card>
        )
      })}
    </Card>
    )
  }
}