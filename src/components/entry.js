import { CommentsContainer }  from './commentsContainer'
import TimeAgo from 'javascript-time-ago'
import Parser from 'html-react-parser'
import { EditEntryContainer } from '../components/editEntryContainer'
import { DeleteEntry } from '../components/deleteEntry'
import { LikeContainer } from '../components/likeContainer'
import { Card } from 'react-bootstrap'

// import '@fortawesome/fontawesome-svg-core/styles.css'

export const Entry = (props) => {
    //debugger
    const timeAgo = new TimeAgo('en-US')

    //debugger
    return (
        <div className="entry">
            <Card>
                <Card.Body>
                    <Card.Title>Created by: {props.entry.name}</Card.Title>
                    <EditEntryContainer {...props} /> <DeleteEntry {...props} />
                    <p>{timeAgo.format(new Date(props.entry.updated_at))}</p>
                    <div className="entryContent">
                        {Parser(props.entry.content)}
                    </div>
                    <p><LikeContainer {...props} likes={props.likes}/>Likes: {props.entry.likes_count}</p>
                    <CommentsContainer comments={props.comments} {...props} search={props.search}/>
                </Card.Body>
            </Card>
            
        </div>
    )
}