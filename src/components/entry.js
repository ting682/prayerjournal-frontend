import { CommentsContainer }  from './commentsContainer'
import TimeAgo from 'javascript-time-ago'
import Parser from 'html-react-parser'
import { EditEntryContainer } from '../components/editEntryContainer'
import { DeleteEntry } from '../components/deleteEntry'
import { LikeContainer } from '../components/likeContainer'


// import '@fortawesome/fontawesome-svg-core/styles.css'

export const Entry = (props) => {
    //debugger
    const timeAgo = new TimeAgo('en-US')
    //const content = JSON.parse(props.entry.content)
    //debugger
    // let entryContent = document.createElement('div')
    // entryContent.innerHTML = props.entry.content
    // let entrySearch;
    // if (props.search) {
    //     entrySearch = props.entry.content.replace(new RegExp(props.search, "gim"), (match) => `<mark>${match}</mark>`)
    // } else {
    //     entrySearch = props.entry.content
    // }
    
    
    //debugger
    return (
        <div className="entry">
            <h3>Created by: {props.entry.name} </h3><EditEntryContainer {...props} /> <DeleteEntry {...props} />
            <p>{timeAgo.format(new Date(props.entry.updated_at))}</p>
            <div className="entryContent">
                {Parser(props.entry.content)}
            </div>
            <p><LikeContainer {...props} likes={props.likes}/>Likes: {props.entry.likes_count}</p>
            <CommentsContainer comments={props.comments} {...props} search={props.search}/>
        </div>
    )
}