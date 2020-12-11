import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import React from 'react'
import { Button } from 'react-bootstrap'
import { deleteEntry } from '../actions/deleteEntry'

export const DeleteEntry = (props) => {

    const history = useHistory()

    const currentUserId = parseInt(props.currentUser.id)
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
        }, history))
    }
    //debugger
    if (props.entry.user_id === currentUserId) {
        return (
            <Button onClick={event => handleClick(event, entryId, history)} >Delete entry</Button>
        )
    } else {
        return (
            <React.Fragment>

            </React.Fragment>
        )
    }

    
}