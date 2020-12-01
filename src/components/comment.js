import TimeAgo from 'javascript-time-ago'
 
// English.
import en from 'javascript-time-ago/locale/en'
 


export const Comment = (props) => {
    
    
 
    // Create formatter (English).
    const timeAgo = new TimeAgo('en-US')
 
    

    return (
        <div class="comment">
            <p>Comment by {props.comment.attributes.name} {timeAgo.format(new Date(props.comment.attributes.updated_at))}</p>
            <p></p>
            <p>{props.comment.attributes.content}</p>
        </div>
    )
}