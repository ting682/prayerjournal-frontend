import { Card } from 'react-bootstrap'

const IntroCard = (props) => {


    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant='top' />
            <Card.Body>
                <Card.Title>Title</Card.Title>
            </Card.Body>
        </Card>
    )
}