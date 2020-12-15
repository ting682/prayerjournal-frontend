import React, { Component } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { editUser } from '../actions/editUser'
import { fetchUser } from '../actions/fetchUser'
import { getCurrentUser } from '../actions/getCurrentUser'

class EditUserProfile extends Component {

    constructor(props) {
        super(props)
        //debugger
        this.state = {
            email: this.props.currentUser.attributes.email_address,
            bio: this.props.currentUser.attributes.bio,
            name: this.props.currentUser.attributes.name
        }
    }

    componentDidMount() {
        if (this.props.loggedIn) {
            this.props.fetchUser(this.props.currentUser.id)
            // this.setState({
            //     email: this.props.currentUser.attributes.email_address,
            //     name: this.props.currentUser.attributes.name,
            //     bio: this.props.currentUser.attributes.bio
            // })
        } else {
            this.props.history.push('/')
        }
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
        this.props.editUser({
            email_address: this.state.email,
            name: this.state.name,
            bio: this.state.bio
        }, this.props.currentUser.id, this.props.history)
    }

    render () {
        return (
            <React.Fragment>
                <br></br>
                <Form onSubmit={this.handleSubmit} >
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                        Email
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control as="input" name="email" type="text" placeholder="Email" onChange={this.handleChange} value={this.state.email} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={2}>
                        Name
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control as="input" name="name" type="text" placeholder="Name" onChange={this.handleChange} value={this.state.name} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalBio">
                        <Form.Label column sm={2}>
                        Bio
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control rows={3} as="textarea" name="bio" type="text" placeholder="Bio" onChange={this.handleChange} value={this.state.bio} />
                        </Col>
                    </Form.Group>
                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Edit profile</Button>
                            </Col>
                    </Form.Group>
                </Form>
            </React.Fragment>
        )
    }
}  

function mapDispatchToProps(dispatch){
    return { 
        fetchUser: (currentUserId) => dispatch(fetchUser(currentUserId)),
        getCurrentUser: () => dispatch(getCurrentUser()),
        editUser: (user, currentUserId, history) => dispatch(editUser(user, currentUserId, history))
    }
  }

  function mapStateToProps(state){
    //debugger
    return {
        loggedIn: !!state.user.currentUser && state.user.currentUser.length !== 0,
        router: state.router,
        entries: state.entries.entries,
        currentUser: state.user.currentUser
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(EditUserProfile)

