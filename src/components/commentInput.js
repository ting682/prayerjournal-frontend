import { Form, Button } from "react-bootstrap";
import { connect } from 'react-redux'
import React, { useState } from 'react'

function CommentInput() {

    const [content, setContent] = useState('')

    const handleChange = (event) => {
        setContent(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Control type="text" value={content} onChange={handleChange}></Form.Control>
            <Button variant="primary" type="submit">
                Add comment
            </Button>
        </Form>
    )
} 

export default connect(null, null)(CommentInput)