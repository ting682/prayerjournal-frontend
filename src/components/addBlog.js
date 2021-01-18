import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'
import { Button, Modal, Form, FormLabel } from 'react-bootstrap'
import FormFileInput from 'react-bootstrap/esm/FormFileInput'
import ReactQuill from 'react-quill'
import S3FileUpload from 'react-s3'
import imageCompression from 'browser-image-compression'
import { postBlog } from '../actions/postBlog'



export const AddBlog = (props) => {
    //debugger
    const [show, setShow] = useState(false)
    const [publish, setPublish] = useState(false)
    const currentUserId = useSelector(state => parseInt(state.user.currentUser.id))
    
    const currentUser = useSelector(state => state.user.currentUser)

    // const loggedIn = useSelector(state => !!state.user.currentUser && state.user.currentUser.length !== 0)
    const dispatch = useDispatch()
    
    const [description, setDescription] = useState('')

    const [imageUrl, setImageUrl] = useState('')

    const [title, setTitle] = useState('')

    const handleClick = () => {
        
        setShow(true)

    }

    const handleClose = () => {
        setShow(false)
    }

    const handleChange = (value) => {
        setDescription(value)
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handlePublish = (event) => {
        
        setPublish(event.target.checked)
    }

    const handleUpload = async (event) => {
        event.preventDefault()
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
            
            const config = {
                bucketName: process.env.REACT_APP_AWS_BUCKET_NAME,
                dirName: process.env.REACT_APP_AWS_BUCKET_DIRECTORY_NAME + "/" + currentUserId,
                region: 'us-east-1',
                accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
            }

            S3FileUpload.uploadFile(compressedFile, config)
                .then(data => {
                    // console.log(data)
                    setImageUrl(data.location)
                })
                .catch(err => console.error(err)) 
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(postBlog(
            {
                title: title,
                description: description,
                image_url: imageUrl,
                published: publish,
                user_id: currentUserId
                
            }
        ))
        setTitle('')
        setDescription('')
        setImageUrl('')
        setShow(false)
    }
    // debugger
    if (currentUserId && (currentUser.attributes.editor || currentUser.attributes.admin)) {
        return (
            <React.Fragment>
                <br></br>
                <Button variant="outline-info" onClick={() => handleClick()} style={{marginBottom: "30px"}}>New series</Button>
                <br></br>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>New series</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                        <Form onSubmit={(event) => handleSubmit(event, props.blogId, currentUserId)}>
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" value={title} onChange={handleTitleChange}></Form.Control>
                            <br></br>
                            <Form.Label>Description</Form.Label>
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
                            <Button type="submit">Add new series</Button>
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