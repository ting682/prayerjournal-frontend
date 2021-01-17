import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'
import { Button, Modal, Form, FormLabel } from 'react-bootstrap'
import FormFileInput from 'react-bootstrap/esm/FormFileInput'
import { editBlog } from '../actions/patchBlog'
import ReactQuill from 'react-quill'
import S3FileUpload from 'react-s3'
import imageCompression from 'browser-image-compression'

const config = {
    bucketName: process.env.REACT_APP_AWS_BUCKET_NAME,
    dirName: process.env.REACT_APP_AWS_BUCKET_DIRECTORY_NAME,
    region: 'us-east-1',
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
}

export const EditBlog = (props) => {
    //debugger
    const [show, setShow] = useState(false)
    const [publish, setPublish] = useState(props.published)
    const currentUserId = useSelector(state => parseInt(state.user.currentUser.id))
    const blogId = props.blogId
    const loggedIn = useSelector(state => !!state.user.currentUser && state.user.currentUser.length !== 0)
    const dispatch = useDispatch()
    
    const [description, setDescription] = useState(props.description)

    const handleClick = () => {
        
        setShow(true)

    }

    const handleClose = () => {
        setShow(false)
    }

    const handleChange = (value) => {
        setDescription(value)
    }

    const handlePublish = (event) => {
        
        setPublish(event.target.checked)
    }

    const handleUpload = async (event) => {
        const imageFile = event.target.files[0];
        console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
        console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);
        
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 700,
            useWebWorker: true
        }
        try {
            const compressedFile = await imageCompression(imageFile, options);
            console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
            console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
        
            S3FileUpload.uploadFile(compressedFile, config)
                .then(data => {
                    // console.log(data)
                    dispatch(editBlog({
                        image_url: data.location
                    }, blogId))
                })
                .catch(err => console.error(err)) 
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (event, blogId) => {
        event.preventDefault()
        dispatch(editBlog(
            {
                
                description: description,
                // user_id: currentUserId,
                published: publish
                
            }, blogId
        ))
        
        setShow(false)
    }
    // debugger
    if (loggedIn && props.userId === currentUserId) {
        return (
            <React.Fragment>
                <Button variant="outline-info" onClick={() => handleClick()}>Edit</Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit series</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                        <Form onSubmit={(event) => handleSubmit(event, blogId, currentUserId)}>
                            <ReactQuill value={description} onChange={handleChange} modules={{ toolbar: [
                                
                                [ 'bold', 'italic', 'underline'],
                                
                                
                                [{ 'header': '1' }, { 'header': '2' }, 'blockquote'],
                                [{ 'list': 'ordered' }, { 'list': 'bullet'}], 
                                [ 'link', 'image', 'video']]}} />
                                <br></br>

                                
                                <Form.Check type="checkbox" label="Publish" onChange={handlePublish} checked={publish}/>
                                <br></br>
                                <FormLabel>Change picture</FormLabel>
                                <FormFileInput onChange={handleUpload}/>
                                <br></br>
                            <Button type="submit">Edit blog</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
            
        )
    } else {
        return (
            <React.Fragment>

            </React.Fragment>
        )
    }
    
}