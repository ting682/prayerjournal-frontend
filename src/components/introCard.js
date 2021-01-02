import { Card } from 'react-bootstrap'

export const IntroCard = (props) => {


    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant='top' href={props.image}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}