import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import React from 'react'
import { Button } from 'react-bootstrap'
import { deleteComment } from '../actions/deleteComment'

export const DeleteEntry = (props) => {

    const history = useHistory()

    const currentUserId = parseInt(props.currentUser.id)
    
    const entryId = props.comment.attributes.entry_id

    const dispatch = useDispatch()

    //debugger

    const handleClick = (event, commentId, entryId, history) => {
        //debugger
        dispatch(deleteComment({
            comment: {
                commentId,
                entryId
            }
        }, history))
    }
    //debugger
    if (props.comment.attributes.user_id === currentUserId) {
        return (
            <Button onClick={event => handleClick(event, commentId, entryId, history)} >Delete comment</Button>
        )
    } else {
        return (
            <React.Fragment>

            </React.Fragment>
        )
    }

    
}