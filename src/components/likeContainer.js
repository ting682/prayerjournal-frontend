import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
import { Heart } from './heart'
import { postLike } from '../actions/postLike'
import { patchLike } from '../actions/patchLike'

export const LikeContainer = (props) => {

    
    const currentUserId = useSelector(state => parseInt(state.user.currentUser.id)) || 0
    
    
    //debugger
    const entryId = parseInt(props.entryId)
    
    const dispatch = useDispatch()

    const loggedIn = useSelector(state => state.user.currentUser.id)
    //debugger
    const currentUserLike = props.likes.find(function(like) {
        //debugger
        return like.attributes.user_id === currentUserId
    }, currentUserId)

    // const [currentUserLikeExists, setCurrentUserLikeExists] = useState(false);

    let liked;
    //debugger
    if ( currentUserLike ) {
       
        liked = currentUserLike.attributes.liked
    } else {
        
        liked = false
    }

    const [heart, setHeart] = useState(liked)
    //debugger

    const handleClick = (event, heart, currentUserLike) => {
        //debugger
        setHeart(!heart)
        
        //debugger
        if ( currentUserLike ) {
            dispatch(patchLike(currentUserLike.id, {
                user_id: currentUserId, 
                entry_id: entryId,
                liked: !heart
            }))
        } else {
            dispatch(postLike({
                user_id: currentUserId, 
                entry_id: entryId,
                liked: true
            }))
        }
    }
    if (loggedIn) {
        return (
            <Button variant="light" onClick={(event) => handleClick(event, heart, currentUserLike, currentUserId, entryId)}>
                <Heart heart={heart} />
            </Button>
        ) 
    } else {
        return (
            <React.Fragment></React.Fragment>
        )
    }
    
    
}