import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { postEntry } from '../actions/postEntry'

class EntryInput extends Component {
    constructor (props) {
        super(props)
        this.state = {
            content: ""
        }

    }

    handleChange = (value) => {

        this.setState(previousState => {
            return {
                ...previousState,
                content: value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        //debugger
        this.props.postEntry(
            {
                content: this.state.content,
                user_id: parseInt(this.props.currentUser.id)
            }
        )

        this.setState({
            content: ''
        })
    }

    render () {
        //debugger
        return (
            <React.Fragment>
                
                <Form onSubmit={this.handleSubmit} >
                    {/* <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label >
                            New journal entry
                        </Form.Label>
                        
                        <Form.Control as="textarea" name="content" rows={3} onChange={this.handleChange} />
                        
                    </Form.Group>
        */}
                    <ReactQuill value={this.state.content} onChange={this.handleChange} modules={{ toolbar: [
                                
                                [ 'bold', 'italic', 'underline'],
                                
                                
                                [{ 'header': '1' }, { 'header': '2' }, 'blockquote'],
                                [{ 'list': 'ordered' }, { 'list': 'bullet'}], 
                                [ 'link', 'image', 'video']]}} />
                    
                        <Form.Group>
                            
                            <Button type="submit">Submit journal entry</Button>
                            
                    </Form.Group>
                </Form>
            </React.Fragment>
        )
    }
}

function mapDispatchToProps(dispatch){
    return { postEntry: (data, history) => dispatch(postEntry(data, history)) }
}

function mapStateToProps(state){
    return {
        loggedIn: !!state.user.currentUser,
        router: state.router,
        entries: state.entries.entries,
        currentUser: state.user.currentUser
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(EntryInput)