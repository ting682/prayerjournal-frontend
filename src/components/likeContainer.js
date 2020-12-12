import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'

library.add(far)


export const LikeContainer = (props) => {

    const currentUserId = parseInt(useSelector(state => state.user.currentUser.id))

    const entryId = parseInt(props.entryId)
    //debugger
    
    const dispatch = useDispatch()

    let liked;
    //debugger
    if ( props.likes.find(function(like) {
        return like.user_id === currentUserId
    },currentUserId) ) {
        liked = true
    } else {
        liked = false
    }

    const [heart, setHeart] = useState(liked)

    const handleClick = () => {
        debugger
        
    }

    useEffect(() => {
        
    })

    return (
        <Button variant="light" onClick={(event) => handleClick(event, currentUserId, entryId)}>
            <FontAwesomeIcon icon={['far', 'heart']} />
        </Button>
    )
    
}