import TimeAgo from 'javascript-time-ago'
import Parser from 'html-react-parser'
import { EditEntryContainer } from '../components/editEntryContainer'
import { DeleteEntry } from '../components/deleteEntry'
import { Card } from 'react-bootstrap'


export const BlogEntry = (props) => {
    //debugger
    const timeAgo = new TimeAgo('en-US')

    
    return (
        <div className="entry">
            
            <Card>
                <Card.Body>
                    <Card.Title>Created by: {props.entry.name}</Card.Title>
                    
                    <EditEntryContainer {...props} /> <DeleteEntry {...props} />
                    <br />
                    
                    <p>{timeAgo.format(new Date(props.entry.updated_at))}</p>
                    <div className="entryContent">
                        {Parser(props.entry.content)}
                    </div>
                    
                    
                </Card.Body>
            </Card>
            
        </div>
    )
}