import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Row, Col, Button } from 'react-bootstrap'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

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
        debugger
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
                    [{ 'font': [] }, { 'size': [] }],
                    [ 'bold', 'italic', 'underline', 'strike' ],
                    [{ 'color': [] }, { 'background': [] }],
                    [{ 'script': 'super' }, { 'script': 'sub' }],
                    [{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block' ],
                    [{ 'list': 'ordered' }, { 'list': 'bullet'}, { 'indent': '-1' }, { 'indent': '+1' }],
                    [ 'direction', { 'align': [] }],
                    [ 'link', 'image', 'video', 'formula' ],
                    [ 'clean' ]]}} />
                    
                        <Form.Group>
                            
                            <Button type="submit">Submit journal entry</Button>
                            
                    </Form.Group>
                </Form>
            </React.Fragment>
        )
    }
}

export default connect(null, null)(EntryInput)