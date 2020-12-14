import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { postSignup } from '../actions/postSignup'

export const Signup = (props) => {

    const dispatch = useDispatch()
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [name, setName] = useState('')
    const [bio, setBio] = useState('')
    // const email = useSelector(state => state.signupUser.email)
    // const password = useSelector(state => state.signupUser.password)
    // const passwordConfirmation = useSelector(state => state.signupUser.passwordConfirmation)
    // const name = useSelector(state => state.signupUser.name)
    // const bio = useSelector(state => state.signupUser.bio)

    const handleEmailChange = (event) => {
        // dispatch({type: 'CHANGE_EMAIL', payload: event.target.value})
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        // dispatch({type: 'CHANGE_PASSWORD', payload: event.target.value})
        setPassword(event.target.value)
    }

    const handlePasswordConfirmationChange = (event) => {
        // dispatch({type: 'CHANGE_PASSWORD_CONFIRMATION', payload: event.target.value})
        setPasswordConfirmation(event.target.value)
    }

    const handleNameChange = (event) => {
        // dispatch({type: 'CHANGE_NAME', payload: event.target.value})
        setName(event.target.value)
    }

    const handleBioChange = (event) => {
        // dispatch({type: 'CHANGE_BIO', payload: event.target.value})
        setBio(event.target.value)
    }

    const handleSubmit = (event, history, email, password, passwordConfirmation, name, bio) => {
        event.preventDefault()
        //debugger
        dispatch(postSignup({
            
            email_address: email,
            password: password,
            password_confirmation: passwordConfirmation,
            name: name,
            bio: bio
            
        }, history))

    }
    //debugger
    return (
        <React.Fragment>
            <br></br>
            
                <Form onSubmit={event => handleSubmit(event, history, email, password, passwordConfirmation, name, bio)} >
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                        Email
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control as="input" name="email" type="email" placeholder="Email" onChange={handleEmailChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                        Password
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control as="input" name="password" type="password" placeholder="Password" onChange={handlePasswordChange} value={password} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalPasswordConfirmation">  
                        <Form.Label column sm={2}>
                        Password confirmation
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control as="input" name="passwordConfirmation" type="password" placeholder="Password confirmation" onChange={handlePasswordConfirmationChange} value={passwordConfirmation} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={2}>
                        Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control as="input" name="name" type="text" placeholder="Name" onChange={handleNameChange} value={name} />
                        </Col>
                        
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalBio">
                        <Form.Label column sm={2}>
                        Bio
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control as="input" name="bio" type="textarea" placeholder="Bio" onChange={handleBioChange} value={bio} />
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