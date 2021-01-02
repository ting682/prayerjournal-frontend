import { Card } from 'react-bootstrap'

export const IntroCard = (props) => {


    return (
        <Card className="introcard" style={{width: '18rem'}}>
            <Card.Img variant='top' src={props.image}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}