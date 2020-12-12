import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import { postSignup }

export const Signup = (props) => {

    const dispatch = useDispatch()
    const history = useHistory()
    const email = useSelector(state => state.signupUser.email)
    const password = useSelector(state => state.signupUser.password)
    const passwordConfirmation = useSelector(state => state.signupUser.passwordConfirmation)
    

    const handleEmailChange = (event) => {
        dispatch({type: 'CHANGE_EMAIL', payload: event.target.value})
    }

    const handlePasswordChange = (event) => {
        dispatch({type: 'CHANGE_PASSWORD', payload: event.target.value})
    }

    const handlePasswordConfirmationChange = (event) => {
        dispatch({type: 'CHANGE_PASSWORD_CONFIRMATION', payload: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        debugger


    }

    return (
        <React.Fragment>
                <Form onSubmit={handleSubmit} >
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                        Email
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control as="input" name="email" type="email" placeholder="Email" onChange={handleEmailChange} value={email}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                        Password
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control as="input" name="password" type="password" placeholder="Password" onChange={handlePasswordChange} value={password} />
                        </Col>
                        <br></br>
                        <Form.Label column sm={2}>
                        Password confirmation
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control as="input" name="passwordConfirmation" type="password" placeholder="Password confirmation" onChange={handlePasswordConfirmationChange} value={passwordConfirmation} />
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