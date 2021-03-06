import React from 'react'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { EditBlog } from './editBlog'
import Parser from 'html-react-parser'
import { Link } from 'react-router-dom'

export const Blog = (props) => {

    const loggedIn = useSelector(state => !!state.user.currentUser && state.user.currentUser.length !== 0)

    // debugger

    if (loggedIn) {
        return (
            <React.Fragment>
                
                <Card>
                    <Link to={{pathname: `/series/${props.blogId}`}} ><Card.Img variant="top" src={props.imageUrl} style={{width: "700px"}} /></Link>
    
                    <Card.Body>
                        <Card.Title><Link to={{pathname: `/series/${props.blogId}`}} >{props.title}</Link></Card.Title>
                        <EditBlog {...props} />
                        
                        {Parser(props.description)}
                            
                        
                        
                    </Card.Body>
                </Card>
                
                
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>

            </React.Fragment>
        )
    }
    
}