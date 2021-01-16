import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { EditBlog } from './editBlog'
import Parser from 'html-react-parser'

export const Blog = (props) => {

    const loggedIn = useSelector(state => !!state.user.currentUser && state.user.currentUser.length !== 0)

    // debugger

    if (loggedIn) {
        return (
            <React.Fragment>
                
                <Card>
                    <Card.Img variant="top" src={props.imageUrl} style={{width: "300px", height: "300px"}} />
    
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <EditBlog {...props} /> <Button>Delete</Button>
                        <Card.Text>
                            {Parser(props.description)}
                            
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                
                
            </React.Fragment>
        )
    }
    
}