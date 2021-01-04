import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { editEntry } from '../actions/editEntry'
import ReactQuill from 'react-quill'

export const EditEntryContainer = (props) => {

    const [show, setShow] = useState(false)
    const [publicEntry, setPublicEntry] = useState(props.entry.public)
    const currentUserId = useSelector(state => parseInt(state.user.currentUser.id))
    const entryId = props.entryId
    const loggedIn = useSelector(state => !!state.user.currentUser && state.user.currentUser.length !== 0)
    const dispatch = useDispatch()
    
    const [content, setContent] = useState(props.entry.content)

    const handleClick = () => {
        
        setShow(true)

    }

    const handleClose = () => {
        setShow(false)
    }

    const handleChange = (value) => {
        setContent(value)
    }

    const handlePublic = (event) => {
        
        setPublicEntry(event.target.checked)
    }

    const handleSubmit = (event, entryId, currentUserId) => {
        event.preventDefault()
        dispatch(editEntry(
            {
                entry: {
                    content: content,
                    entry_id: parseInt(entryId),
                    user_id: currentUserId,
                    public: publicEntry
                }
            }, entryId
        ))
        setShow(false)
    }
    // debugger
    if (loggedIn && props.entry.user_id === currentUserId) {
        return (
            <React.Fragment>
                <Button variant="outline-info" onClick={() => handleClick()}>Edit</Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit entry</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                        <Form onSubmit={(event) => handleSubmit(event, entryId, currentUserId)}>
                            <ReactQuill value={content} onChange={handleChange} modules={{ toolbar: [
                                
                                [ 'bold', 'italic', 'underline'],
                                
                                
                                [{ 'header': '1' }, { 'header': '2' }, 'blockquote'],
                                [{ 'list': 'ordered' }, { 'list': 'bullet'}], 
                                [ 'link', 'image', 'video']]}} />
                                <br></br>

                                <Form.Check type="checkbox" label="Make public" onChange={handlePublic} checked={publicEntry}/>
                            <Button type="submit">Edit entry</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
            
        )
    } else {
        return (
            <React.Fragment>

            </React.Fragment>
        )
    }
    
}