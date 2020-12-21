import { useDispatch } from 'react-redux'

import { Button } from 'react-bootstrap'
import { useState } from 'react'
import { Heart } from './heart'
import { postLike } from '../actions/postLike'
import { patchLike } from '../actions/patchLike'

export const LikeContainer = (props) => {

    const currentUserId = parseInt(props.currentUser.id)
    //debugger
    const entryId = parseInt(props.entryId)
    
    const dispatch = useDispatch()
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

    return (
        <Button variant="light" onClick={(event) => handleClick(event, heart, currentUserLike, currentUserId, entryId)}>
            <Heart heart={heart} />
        </Button>
    )
    
}