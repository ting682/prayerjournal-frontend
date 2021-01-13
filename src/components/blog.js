import React from 'react'
import { Card } from 'react-bootstrap'

export const Blog = (props) => {




    return (
        <React.Fragment>
            
            <Card>
                <Card.Image variant="top" src={props.imageUrl} style={{width: "300px", height: "300px"}} />

                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            
            
        </React.Fragment>
    )
}