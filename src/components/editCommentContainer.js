import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { editComment } from '../actions/editComment'

export const EditCommentContainer = (props) => {

    const [show, setShow] = useState(false)
    const currentUserId = parseInt(props.currentUser.id)
    const commentId = props.comment.id
    const entryId = props.comment.attributes.entry_id
    const dispatch = useDispatch()
    const [content, setContent] = useState(props.comment.attributes.content)

    const handleClick = (event) => {
        
        setShow(true)

    }

    const handleClose = () => {
        setShow(false)
    }

    const handleChange = (event) => {
        setContent(event.target.value)
    }

    const handleSubmit = (event, commentId, entryId, currentUserId) => {
        event.preventDefault()
        dispatch(editComment(
            {
                comment: {
                    content: content,
                    entry_id: parseInt(entryId),
                    user_id: currentUserId
                }
            }, commentId
        ))
        setShow(false)
    }

    if (props.comment.attributes.user_id === currentUserId) {
        return (
            <React.Fragment>
                <Button onClick={() => handleClick()}>Edit comment</Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Body>
                        
                        <Form onSubmit={(event) => handleSubmit(event, commentId, entryId, currentUserId)}>
                            <Form.Control type="text" value={content} onChange={handleChange}></Form.Control><br></br>
                            <Button type="submit">Edit comment</Button>
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