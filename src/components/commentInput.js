import { Form, Button } from "react-bootstrap";
// import { connect } from 'react-redux'
import React, { useState } from 'react'
import { postComment } from '../actions/postComment'
// import { getCurrentUser } from '../actions/getCurrentUser'
import { useDispatch, useSelector } from 'react-redux'


export const CommentInput = (props) => {

    const [content, setContent] = useState('')
    const currentUser = useSelector(state => state.user.currentUser)
    const entryId = props.entryId

    

    const dispatch = useDispatch()

    const handleChange = (event) => {
        setContent(event.target.value)
    }

    const handleSubmit = (event, entryId) => {
        event.preventDefault()
        
        dispatch(postComment(
            {
                comment: {
                    content: content,
                    user_id: parseInt(currentUser.id),
                    entry_id: parseInt(entryId)
                }
            }
        ))

        setContent('')
    }

    return (
        <Form onSubmit={event => handleSubmit(event, entryId)}>
            <Form.Control type="text" value={content} onChange={handleChange}></Form.Control>
            <Button variant="primary" type="submit">
                Add comment
            </Button>
        </Form>
    )
} 



