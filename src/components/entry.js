import { CommentsContainer }  from './commentsContainer'
import TimeAgo from 'javascript-time-ago'
import Parser from 'html-react-parser'
import { EditEntryContainer } from '../components/editEntryContainer'
import { DeleteEntry } from '../components/deleteEntry'
import { LikeContainer } from '../components/likeContainer'
import { Card } from 'react-bootstrap'
import FbShare from './fbShare'
import { PrayersContainer } from './prayersContainer'
// import '@fortawesome/fontawesome-svg-core/styles.css'

export const Entry = (props) => {
    
    const timeAgo = new TimeAgo('en-US')

    let prayedCount;

    if (props.entry.prayers_count === 0) {
        prayedCount = ""
    } else if (props.entry.prayers_count === 1) {
        prayedCount = "Prayed once"
    } else {
        prayedCount = "Prayed " + props.entry.prayers_count + " times"
    }
    
    return (
        <div className="entry">
            
            <Card>
                <Card.Body>
                    <Card.Title>Created by: {props.entry.name}</Card.Title>
                    
                    <EditEntryContainer {...props} /> <DeleteEntry {...props} />
                    <br />
                    <FbShare route={"https://prayerjournal.place/entries"} entryRoute={props.entryId} />
                    <p>{timeAgo.format(new Date(props.entry.updated_at))}</p>
                    <div className="entryContent">
                        {Parser(props.entry.content)}
                    </div>
                    <p><PrayersContainer {...props} prayers={props.prayers} />{prayedCount} <LikeContainer {...props} likes={props.likes}/>Likes: {props.entry.likes_count}</p>
                    <CommentsContainer comments={props.comments} {...props} search={props.search}/>
                </Card.Body>
            </Card>
            
        </div>
    )
}