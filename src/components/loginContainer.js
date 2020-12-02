import React, { Component } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'

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
        debugger
    }

    handleSubmit = (event) => {
        debugger
    }

    render () {
        return (
            <React.Fragment>
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



export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)