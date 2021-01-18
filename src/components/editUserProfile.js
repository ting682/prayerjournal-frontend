import React, { Component } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import FormFileInput from 'react-bootstrap/esm/FormFileInput'
import { connect } from 'react-redux'
import { editUser } from '../actions/editUser'
import { fetchUser } from '../actions/fetchUser'
import { getCurrentUser } from '../actions/getCurrentUser'
import S3FileUpload from 'react-s3'
import imageCompression from 'browser-image-compression'



class EditUserProfile extends Component {

    constructor(props) {
        super(props)
        //debugger
        this.state = {
           
            email: '',
            bio: '',
            name: ''
        }

        
        
    }

    componentDidMount() {
        //debugger
        //this.props.fetchUser(this.props.currentUser.id, this.props.history)
        // debugger
        if (this.props.currentUser !== undefined && this.props.currentUser.length !== 0) {
            //debugger
            this.setState({
            email: this.props.currentUser.attributes.email_address,
            bio: this.props.currentUser.attributes.bio,
            name: this.props.currentUser.attributes.name
            })
        }
        
        // if (this.props.loggedIn) {
        //     this.props.fetchUser(this.props.currentUser.id)
            
        // } else {
        //     this.props.history.push('/')
        // }
    }

    handleChange = (event) => {
        this.setState(previousState => {
            return {
                ...previousState,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        //debugger
        this.props.editUser({
            email_address: this.state.email,
            name: this.state.name,
            bio: this.state.bio
        }, this.props.currentUser.id, this.props.history)
    }

    handleUpload = async (event) => {
        const imageFile = event.target.files[0];
        console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
        console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);
        
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 300,
            useWebWorker: true
        }
        try {
            const compressedFile = await imageCompression(imageFile, options);
            console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
            console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
            
            const config = {
                bucketName: process.env.REACT_APP_AWS_BUCKET_NAME,
                dirName: "users/" + this.props.currentUser.id,
                region: 'us-east-1',
                accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
            }

            S3FileUpload.uploadFile(compressedFile, config)
                .then(data => {
                    // console.log(data)
                    this.props.editUser({
                        profile_url: data.location
                    }, this.props.currentUser.id, this.props.history)
                })
                .catch(err => console.error(err)) 
        } catch (error) {
            console.log(error);
        }
    }

    render () {
        return (
            <React.Fragment>
                <br></br>
                <Form onSubmit={this.handleSubmit} >
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                        Email
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control as="input" name="email" type="text" placeholder="Email" onChange={this.handleChange} value={this.state.email} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={2}>
                        Name
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control as="input" name="name" type="text" placeholder="Name" onChange={this.handleChange} value={this.state.name} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalBio">
                        <Form.Label column sm={2}>
                        Bio
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control rows={3} as="textarea" name="bio" type="text" placeholder="Bio" onChange={this.handleChange} value={this.state.bio} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalProfilePicture">
                        <Form.Label column sm={2}>
                            Profile picture
                        </Form.Label>
                        <Col sm={10}>
                            <FormFileInput onChange={this.handleUpload}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Edit profile</Button>
                            </Col>
                    </Form.Group>
                    
                </Form>
            </React.Fragment>
        )
    }
}  

function mapDispatchToProps(dispatch){
    return { 
        fetchUser: (currentUserId, history) => dispatch(fetchUser(currentUserId, history)),
        getCurrentUser: () => dispatch(getCurrentUser()),
        editUser: (user, currentUserId, history) => dispatch(editUser(user, currentUserId, history))
    }
  }

  function mapStateToProps(state){
    //debugger
    return {
        loggedIn: !!state.user.currentUser && state.user.currentUser.length !== 0,
        router: state.router,
        entries: state.entries.entries,
        currentUser: state.user.currentUser
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(EditUserProfile)

