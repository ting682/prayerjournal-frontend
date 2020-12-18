import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

export const User = (props) => {

    //debugger
    return (
        <React.Fragment>
            
            {/*<p>{props.user.attributes.name}</p>
            <p>{props.user.attributes.email_address}</p>
    <p>{props.user.attributes.bio}</p> */}

        <Container>
            <div className="main-body-user">
                <Row xs={1} sm={1} md={1} lg={1}>
                    <Col>
                        <Card>
                            <Card.Body>
                                <h4>{props.user.attributes.name}</h4>
                                {/*<Button>Follow</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Row xs={1} sm={2}>
                                    <Col>
                                        <strong>
                                        Name
                                        </strong>
                                    </Col>
                                    
                                    <Col>
                                        {props.user.attributes.name}
                                    </Col>

                                </Row>
                                <hr></hr>
                                <Row xs={1} sm={2}>
                                    <Col>
                                        <strong>
                                        Email
                                        </strong>
                                    </Col>
                                    <Col>
                                        {props.user.attributes.email_address}
                                    </Col>
                                </Row>
                                <hr></hr>
                                <Row xs={1} sm={2}>
                                    <Col>
                                        <strong>
                                            Bio
                                        </strong>
                                        
                                    </Col>
                                    <Col>
                                        {props.user.attributes.bio}
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
        </React.Fragment>
    )
}