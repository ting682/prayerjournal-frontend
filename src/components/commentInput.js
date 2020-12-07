import { Form, Button } from "react-bootstrap";
import { connect } from 'react-redux'
import React, { useState } from 'react'
import { postComment } from '../actions/postComment'
import { getCurrentUser } from '../actions/getCurrentUser'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export const CommentInput = (props) => {

    const [content, setContent] = useState('')
    const currentUser = useSelector(state => state.user.currentUser)
    const entryId = useState(props.entryId)

    let history = useHistory()

    const dispatch = useDispatch()

    const handleChange = (event) => {
        setContent(event.target.value)
    }

    const handleSubmit = (event, entryId) => {
        event.preventDefault()
        debugger
        dispatch(postComment(
            {
                comment: {
                    content: content,
                    user_id: currentUser.id,

                }
            }
        ))
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

function mapDispatchToProps(dispatch){
    return { 
        postComment: () => dispatch(postComment()),
        getCurrentUser: () => dispatch(getCurrentUser())
    }
  }

  function mapStateToProps(state){
    //debugger
    return {
        loggedIn: !!state.user.currentUser,
        router: state.router,
        entries: state.entries.entries,
        currentUser: state.user.currentUser
    }
  }

