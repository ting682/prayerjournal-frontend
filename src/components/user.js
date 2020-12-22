import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

export const User = (props) => {

    let {name, email_address, bio} = props.user.attributes
    //debugger
    return (
        <React.Fragment>
        

        <Container>
            <div className="main-body-user">
                <Row xs={1} sm={1} md={1} lg={1}>
                    <Col>
                        <Card>
                            <Card.Body>
                                <h4>{name}</h4>
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
                                        {name}
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
                                        {email_address}
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
                                        {bio}
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