import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import React from 'react'
import { Button } from 'react-bootstrap'
import { deleteEntry } from '../actions/deleteEntry'

export const DeleteEntry = (props) => {

    const history = useHistory()
    
    
    const currentUserId = useSelector(state => parseInt(state.user.currentUser.id))
    
    
    //debugger
    const entryId = parseInt(props.entryId)

    const dispatch = useDispatch()

    //debugger

    const handleClick = (event, entryId, history) => {
        //debugger
        dispatch(deleteEntry({
            entry: {
                
                entryId
            }
        }, history, props.entry.blog_id))
    }
    //debugger
    if (props.entry.user_id === currentUserId) {
        return (
            <Button variant="outline-danger" onClick={event => handleClick(event, entryId, history)} >Delete</Button>
        )
    } else {
        return (
            <React.Fragment>

            </React.Fragment>
        )
    }

    
}