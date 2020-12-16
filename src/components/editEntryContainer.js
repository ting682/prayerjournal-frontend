import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { editEntry } from '../actions/editEntry'
import ReactQuill from 'react-quill'

export const EditEntryContainer = (props) => {

    const [show, setShow] = useState(false)
    const currentUserId = parseInt(props.currentUser.id)
    const entryId = props.entryId

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

    const handleSubmit = (event, entryId, currentUserId) => {
        event.preventDefault()
        dispatch(editEntry(
            {
                entry: {
                    content: content,
                    entry_id: parseInt(entryId),
                    user_id: currentUserId
                }
            }, entryId
        ))
        setShow(false)
    }
    //debugger
    if (props.entry.user_id === currentUserId) {
        return (
            <React.Fragment>
                <Button variant="outline-info" onClick={() => handleClick()}>Edit</Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Body>
                        
                        <Form onSubmit={(event) => handleSubmit(event, entryId, currentUserId)}>
                            <ReactQuill value={content} onChange={handleChange} modules={{ toolbar: [
                                [{ 'font': [] }, { 'size': [] }],
                                [ 'bold', 'italic', 'underline', 'strike' ],
                                [{ 'color': [] }, { 'background': [] }],
                                [{ 'script': 'super' }, { 'script': 'sub' }],
                                [{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block' ],
                                [{ 'list': 'ordered' }, { 'list': 'bullet'}, { 'indent': '-1' }, { 'indent': '+1' }],
                                [ 'direction', { 'align': [] }],
                                [ 'link', 'image', 'video', 'formula' ],
                                [ 'clean' ]]}} />
                                <br></br>
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