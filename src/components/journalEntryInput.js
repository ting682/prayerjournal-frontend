import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { postEntry } from '../actions/postEntry'
import { BibleVerseSearch } from './bibleVerseSearch'

class JournalEntryInput extends Component {
    constructor (props) {
        super(props)
        this.state = {
            content: "",
            public: false
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

    handlePublic = (event) => {
        //debugger
        this.setState(previousState => {
            return {
                ...previousState,
                public: event.target.checked
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
                public: this.state.public
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
                                [ 'link', 'image', 'video']]}} />
                    
                        <Form.Group>
                            <Form.Check type="checkbox" label="Make public" onChange={this.handlePublic}/>   
                            <Button type="submit">Submit journal entry</Button> 
                            
                    </Form.Group>
                </Form>
                <BibleVerseSearch />
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

export default connect(mapStateToProps, mapDispatchToProps)(JournalEntryInput)