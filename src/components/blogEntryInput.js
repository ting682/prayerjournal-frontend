import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { postBlogEntry } from '../actions/postBlogEntry'

class BlogEntryInput extends Component {
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
        // debugger
        this.props.postBlogEntry(
            {
                content: this.state.content,
                user_id: parseInt(this.props.currentUser.id),
                public: false,
                blog_id: parseInt(this.props.blog.blog.id)
            }
        )

        document.getElementsByClassName('ql-editor')[0].innerHTML = ""
        
        this.setState({
            content: ''
        })
    }

    render () {
        if (this.props.currentUser.attributes.editor) {
            return (
                <React.Fragment>
                    
                    <Form onSubmit={this.handleSubmit} >
                        
                        <ReactQuill value={this.state.content} onChange={this.handleChange} modules={{ toolbar: [
                                    
                                    [ 'bold', 'italic', 'underline'],
                                    
                                    
                                    [{ 'header': '1' }, { 'header': '2' }, 'blockquote'],
                                    [{ 'list': 'ordered' }, { 'list': 'bullet'}], 
                                    [ 'link', 'image', 'video']]}} />
                        
                            <Form.Group>
                                
                                <Button type="submit">Submit series entry</Button>
                                
                        </Form.Group>
                    </Form>
                    
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment></React.Fragment>
            )
        }
            
        
        
    }
}

function mapDispatchToProps(dispatch){
    return { postBlogEntry: (data, history) => dispatch(postBlogEntry(data, history)) }
}

function mapStateToProps(state){
    return {
        loggedIn: !!state.user.currentUser,
        router: state.router,
        entries: state.entries.entries,
        currentUser: state.user.currentUser,
        blog: state.blog
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(BlogEntryInput)