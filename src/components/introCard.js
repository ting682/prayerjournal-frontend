import { Card } from 'react-bootstrap'

export const IntroCard = (props) => {


    return (
        
        <Card className="introcard">
            <Card.Img variant='top' src={props.image}/>
            <Card.Body>
                
                <Card.Title style={{textAlign: "center"}}>{props.title}</Card.Title>
                
                    {props.text}
                
            </Card.Body>
        </Card>
    )
}