import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { editBlog } from '../actions/patchBlog'
import ReactQuill from 'react-quill'

export const EditBlog = (props) => {
    //debugger
    const [show, setShow] = useState(false)
    const [publish, setPublish] = useState(props.published)
    const currentUserId = useSelector(state => parseInt(state.user.currentUser.id))
    const blogId = props.blogId
    const loggedIn = useSelector(state => !!state.user.currentUser && state.user.currentUser.length !== 0)
    const dispatch = useDispatch()
    
    const [description, setDescription] = useState(props.description)

    const handleClick = () => {
        
        setShow(true)

    }

    const handleClose = () => {
        setShow(false)
    }

    const handleChange = (value) => {
        setDescription(value)
    }

    const handlePublish = (event) => {
        
        setPublish(event.target.checked)
    }

    const handleSubmit = (event, blogId, currentUserId) => {
        event.preventDefault()
        dispatch(editBlog(
            {
                
                description: description,
                blog_id: parseInt(blogId),
                // user_id: currentUserId,
                publish: publish
                
            }, blogId
        ))
        setShow(false)
    }
    // debugger
    if (loggedIn && props.userId === currentUserId) {
        return (
            <React.Fragment>
                <Button variant="outline-info" onClick={() => handleClick()}>Edit</Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit series</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                        <Form onSubmit={(event) => handleSubmit(event, blogId, currentUserId)}>
                            <ReactQuill value={description} onChange={handleChange} modules={{ toolbar: [
                                
                                [ 'bold', 'italic', 'underline'],
                                
                                
                                [{ 'header': '1' }, { 'header': '2' }, 'blockquote'],
                                [{ 'list': 'ordered' }, { 'list': 'bullet'}], 
                                [ 'link', 'image', 'video']]}} />
                                <br></br>

                                <Form.Check type="checkbox" label="Publish" onChange={handlePublish} checked={publish}/>
                            <Button type="submit">Edit blog</Button>
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