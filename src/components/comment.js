import TimeAgo from 'javascript-time-ago'
import { DeleteComment } from './deleteComment'
import { EditCommentContainer } from './editCommentContainer'


export const Comment = (props) => {
    
    // Create formatter (English).
    const timeAgo = new TimeAgo('en-US')
    


    return (
        <div className="comment">
            <p>Comment by {props.comment.attributes.name} {timeAgo.format(new Date(props.comment.attributes.updated_at))}  <EditCommentContainer {...props} /> <DeleteComment {...props} /></p>
            <p></p>
            <div className="commentContent">
                <p>{props.comment.attributes.content}</p>
            </div>
            
        </div>
    )
}