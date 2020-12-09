import { useDispatch } from 'react-redux'

import React from 'react'
import { Button } from 'react-bootstrap'
import { deleteComment } from '../actions/deleteComment'

export const DeleteComment = (props) => {



    const currentUserId = parseInt(props.currentUser.id)
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
            <Button onClick={() => handleClick(commentId, entryId)} >Delete comment</Button>
        )
    } else {
        return (
            <React.Fragment>

            </React.Fragment>
        )
    }

    
}