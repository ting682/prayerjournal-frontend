import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

export const User = (props) => {

    // debugger

    let {name, email_address, bio, profile_url} = props.user.attributes
    // debugger

    return (
        <React.Fragment>
        
            {/* <img src={profile_url} /> */}
            <Container>
                <div className="main-body-user">
                    <Row xs={1} sm={1} md={1} lg={1}>
                        <Col>
                            <Card>
                                <Card.Img variant="top" style={{width: "300px", margin: "auto"}} src={profile_url} />
                                
                                <Card.Body>
                                    
                                    {/* <Button onClick={handleProfileModal}>Change profile image</Button> */}
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