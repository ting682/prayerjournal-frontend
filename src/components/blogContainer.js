import React, { useEffect } from 'react'
import { Card, Breadcrumb } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import Parser from 'html-react-parser'
import { fetchBlog } from '../actions/fetchBlog'
import { useHistory, Link } from 'react-router-dom'
import TimeAgo from 'javascript-time-ago'
import { BlogEntry } from './blogEntry'
import BlogEntryInput from './blogEntryInput'
import { BibleVerseSearch } from './bibleVerseSearch'


export const BlogContainer = (props) => {

    // const loggedIn = useSelector(state => !!state.user.currentUser && state.user.currentUser.length !== 0)

    const loaded = useSelector(state => state.blog.loaded)

    const dispatch = useDispatch()

    const history = useHistory()

    const currentUser = useSelector(state => state.user.currentUser)

    const currentUserId = useSelector(state => state.user.currentUser.id) > 0

    const blog = useSelector(state => state.blog.blog)

    const timeAgo = new TimeAgo('en-US')

    useEffect(() => {

        dispatch(fetchBlog(props.match.params.blogId, history))

    }, [dispatch, history, props.match.params.blogId])

    if (loaded) {
        // debugger
        const { image_url, title, description, updated_at, name } = blog.attributes

        return (
            <React.Fragment>
                <Breadcrumb>
                    <Breadcrumb.Item ><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/series">Series</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>{title}</Breadcrumb.Item>
                </Breadcrumb>
                <Card>
                    <Card.Img variant="top" src={image_url} style={{width: "700px"}} />
    
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        
                        
                        <p>created {timeAgo.format(new Date(updated_at))}</p>
                        <p>by {name}</p>
                            {Parser(description)}
                            
                        
                        
                    </Card.Body>
                </Card>
                
                <BlogEntryInput {...props} />

                {currentUserId && currentUser.attributes.editor && <BibleVerseSearch />}
                <br></br>
                {blog.entries.map(entry => {
                    return <BlogEntry key={entry.id} entryId={entry.id} entry={entry.attributes} {...props} />
                })}
                
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>

            </React.Fragment>
        )
    }
}