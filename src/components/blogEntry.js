import TimeAgo from 'javascript-time-ago'
import Parser from 'html-react-parser'
import { EditBlogEntryContainer } from '../components/editBlogEntryContainer'
import { DeleteEntry } from '../components/deleteEntry'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import React from 'react'

export const BlogEntry = (props) => {
    //debugger
    const timeAgo = new TimeAgo('en-US')

    const currentUser = useSelector(state => state.user.currentUser)

    // debugger

    if (props.entry.published || (parseInt(currentUser.id) === props.entry.user_id)) {
        return (
            <div className="entry">
                
                <Card>
                    <Card.Body>
                        
                        
                        <EditBlogEntryContainer {...props} /> <DeleteEntry {...props} />
                        <br />
                        
                        <p>{timeAgo.format(new Date(props.entry.updated_at))}</p>
                        <div className="entryContent">
                            {Parser(props.entry.content)}
                        </div>
                        
                        
                    </Card.Body>
                </Card>
                
            </div>
        )
    } else {
        return (
            <React.Fragment>

            </React.Fragment>
        )
    }
    
    
}