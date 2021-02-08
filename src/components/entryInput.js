import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { postEntry } from '../actions/postEntry'

import ImageCompress from 'quill-image-compress';
Quill.register('modules/imageCompress', ImageCompress);

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
                user_id: parseInt(this.props.currentUser.id),
                public: true
            }
        )

        document.getElementsByClassName('ql-editor')[0].innerHTML = ""
        
        this.setState({
            content: ''
        })
    }

    render () {
        //debugger
        return (
            <React.Fragment>
                
                <Form onSubmit={this.handleSubmit} >
                    
                    <ReactQuill value={this.state.content} onChange={this.handleChange} modules={{ toolbar: [
                                
                                [ 'bold', 'italic', 'underline'],
                                
                                
                                [{ 'header': '1' }, { 'header': '2' }, 'blockquote'],
                                [{ 'list': 'ordered' }, { 'list': 'bullet'}], 
                                [ 'link', 'image', 'video']],
                                
                                imageCompress: {
                                    quality: 0.7, // default
                                    maxWidth: 1000, // default
                                    maxHeight: 1000, // default
                                    debug: true, // default
                                  }
                                
                                }} />
                    
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