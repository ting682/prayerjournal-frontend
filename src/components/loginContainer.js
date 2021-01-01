import React, { Component } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { fetchLogin } from '../actions/fetchLogin'
// import { withRouter } from 'react-router-dom'

class LoginContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event) => {
        this.setState(previousState => {
            return {
                ...previousState,
                [event.target.name]: event.target.value
            }
        })
        
    }

    handleSubmit = (event) => {
        event.preventDefault()
        //debugger
        this.props.fetchLogin({
            email: this.state.email,
            password: this.state.password
        },this.props.history, this.props.routeRequest)
        

    }

    render () {
        //debugger
        if (this.props.loggedIn) {
            //debugger
            if (this.props.routeRequest.length === 0 || this.props.routeRequest === undefined) {
                return <Redirect to="/entries" />
            } else {
                this.props.clearRequest()
                this.props.closeAlert()
                return <Redirect to={{
                    pathname: this.props.routeRequest
                }} />
            }
            
        } else {
            return (
                <React.Fragment>
                    <br></br>
                    <Form onSubmit={this.handleSubmit} >
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                            Email
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control as="input" name="email" type="email" placeholder="Email" onChange={this.handleChange} />
                            </Col>
                        </Form.Group>
    
                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                            Password
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control as="input" name="password" type="password" placeholder="Password" onChange={this.handleChange} />
                            </Col>
                        </Form.Group>
                            <Form.Group as={Row}>
                                <Col sm={{ span: 10, offset: 2 }}>
                                <Button type="submit">Sign in</Button>
                                </Col>
                        </Form.Group>
                    </Form>
                </React.Fragment>
            )
        }
        
    }
}

function mapDispatchToProps(dispatch){
    return { 
        fetchLogin: (data, history, request) => dispatch(fetchLogin(data, history, request)),
        clearRequest: () => dispatch({type: 'CLEAR_REQUEST'}),
        closeAlert: () => dispatch({type: 'CLOSE_ALERT'})
    }
  }

  function mapStateToProps(state){
    return {
        loggedIn: !!state.user.currentUser.id,
        router: state.router,
        entries: state.entries.entries,
        currentUser: state.currentUser,
        routeRequest: state.routeRequest.routeRequest
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)