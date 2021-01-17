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
                    <Card.Img variant="top" src={props.imageUrl} style={{width: "700px"}} />
    
                    <Card.Body>
                        <Card.Title><Link to={{pathname: `/series/${props.blogId}`}} >{props.title}</Link></Card.Title>
                        <EditBlog {...props} />
                        <Card.Text>
                            {Parser(props.description)}
                            
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                
                
            </React.Fragment>
        )
    }
    
}