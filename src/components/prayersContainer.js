import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
// import { prayed } from './prayed'
import { postPrayer } from '../actions/postPrayer'
// import { patchPrayer } from '../actions/patchPrayer'
import { Pray } from './pray'

export const PrayersContainer = (props) => {

    
    const currentUserId = useSelector(state => parseInt(state.user.currentUser.id)) || 0
    
    
    //debugger
    const entryId = parseInt(props.entryId)
    
    const dispatch = useDispatch()

    const loggedIn = useSelector(state => state.user.currentUser.id)
    
    const currentUserPrayed = props.prayers.find(function(prayer) {
        
        return prayer.attributes.user_id === currentUserId
    }, currentUserId)

    let userPrayed;
    
    if ( currentUserPrayed ) {
       
        userPrayed = currentUserPrayed.attributes.prayed
    } else {
        
        userPrayed = false
    }

    const [prayed, setPrayed] = useState(userPrayed)
    // debugger

    const handleClick = () => {
        //debugger
        setPrayed(true)
        
        //debugger
        
        dispatch(postPrayer({
            user_id: currentUserId, 
            entry_id: entryId,
            prayed: true
        }))
        
    }
    if (loggedIn) {
        return (
            <Button variant="light" onClick={handleClick}>
                <Pray prayed={prayed} />
            </Button>
        ) 
    } else {
        return (
            <React.Fragment></React.Fragment>
        )
    }
    
    
}