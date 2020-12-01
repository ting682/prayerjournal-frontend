import { CommentsContainer }  from './commentsContainer'
import TimeAgo from 'javascript-time-ago'

 


export const Entry = (props) => {
    //debugger
    const timeAgo = new TimeAgo('en-US')

    return (
        <div class="entry">
            <h3>Created by: {props.entry.name} </h3>
            <p>{timeAgo.format(new Date(props.entry.updated_at))}</p>
            <p>{props.entry.content}</p>
            <p>Likes: {props.entry.likes_count}</p>
            <CommentsContainer comments={props.comments} />
        </div>
    )
}