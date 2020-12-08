import TimeAgo from 'javascript-time-ago'
import { Button } from 'react-bootstrap'
import { DeleteComment } from './deleteComment'

export const Comment = (props) => {
    
    // Create formatter (English).
    const timeAgo = new TimeAgo('en-US')

    return (
        <div className="comment">
            <p>Comment by {props.comment.attributes.name} {timeAgo.format(new Date(props.comment.attributes.updated_at))}  <DeleteComment {...props} /></p>
            <p></p>
            <p>{props.comment.attributes.content}</p>
        </div>
    )
}