import { useDispatch, useSelector } from 'react-redux'

import React from 'react'
import { Button } from 'react-bootstrap'
import { deleteComment } from '../actions/deleteComment'

export const DeleteComment = (props) => {


    //debugger
    const currentUserId = useSelector(state => parseInt(state.user.currentUser.id))
    const commentId = props.comment.id
    const entryId = props.comment.attributes.entry_id

    const dispatch = useDispatch()

    //debugger

    const handleClick = (commentId, entryId) => {
        //debugger
        dispatch(deleteComment({
            comment: {
                commentId,
                entryId
            }
        }))
    }
    //debugger
    if (props.comment.attributes.user_id === currentUserId) {
        return (
            <Button variant="outline-danger" onClick={() => handleClick(commentId, entryId)} >Delete</Button>
        )
    } else {
        return (
            <React.Fragment>

            </React.Fragment>
        )
    }

    
}