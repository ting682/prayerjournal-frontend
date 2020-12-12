import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(far)
export const Heart = (props) => {
    
    if (props.heart) {
        return (
            <FontAwesomeIcon icon={faHeart} style={{color: "red"}}/>
        )
    } else {
        return (
            <FontAwesomeIcon icon={['far', 'heart']} />
        )
    }
}