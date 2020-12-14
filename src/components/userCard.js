import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export const UserCard = (props) => {

    //debugger
    return (
        <Card style={{ width: '18rem' }}>
            {/*<Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>{props.user.attributes.name}</Card.Title>
                <Card.Text>
                {props.user.attributes.bio}
                </Card.Text>
                <Link to={{
                    pathname: `/users/${props.user.id}`
                }} ><Button>{props.user.attributes.name}'s profile</Button></Link>
            </Card.Body>
        </Card>
    )
}