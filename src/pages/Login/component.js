import React from 'react'
import { Row, Col, Card, CardBody, Input, Button } from 'reactstrap';
import { toast } from 'react-toastify';

export default class LoginComponent extends React.Component{
  state = {
    accountId: '',
    password: '',
    error: true
  }
  render(){
    return(
      <div
        style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <Card className="border border-primary">
          <CardBody>
            <Col>
              <Row className="justify-content-center mb-2">
                Account Id
              </Row>
              <Row className='p-2'>
                <Input type='text' onChange={(e)=> this.setState({accountId: e.target.value})}/>
              </Row>
              <Row className="justify-content-center mb-2">
                Password
              </Row>
              <Row className='p-2'>
                <Input type='password' onChange={(e)=> this.setState({password: e.target.value})}/>
              </Row>
              <Row>
                {
                    this.state.accountId && this.state.password
                  ?
                    null
                  :
                      <a className='text-danger'>Enter Account Id and Password</a>
                }
              </Row>
              <Row className="justify-content-center p-2">
                <Button onClick={(e)=>{
                  if(this.state.accountId && this.state.password)
                  this.props.signIn(
                    this.state.accountId,
                    this.state.password
                  )
                  else toast.error('Please enter both, Account Id and Password!')
                }}> Log In</Button>
              </Row>
            </Col>
          </CardBody>
        </Card>
      </div>
    )
  }
}