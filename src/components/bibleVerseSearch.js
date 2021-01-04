import { Button, Modal, Form } from 'react-bootstrap'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postSearchBible } from '../actions/postSearchBible'
import { BibleVerseSearchResultsContainer } from './bibleVerseSearchResultsContainer'

export const BibleVerseSearch = (props) => {

    const [searchTerm, setSearchTerm] = useState('')
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    const [bibleVersion, setBibleVersion] = useState('65eec8e0b60e656b-01')

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleClick = (event) => {

        setShow(true)

    }

    const handleClose = () => {
        setShow(false)
    }

    const handleChangeBibleVersion = (event) => {
        setBibleVersion(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(postSearchBible(searchTerm, bibleVersion))
    }

    return (
        <React.Fragment>
                <Button onClick={handleClick} >Bible verse search</Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Bible verse search</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                        <Form onSubmit={handleSubmit}>
                            <Form.Control type="text" value={searchTerm} onChange={handleSearchChange}></Form.Control><br></br>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check 
                                            inline 
                                            name="bibleversion" 
                                            label="Free Bible Version" 
                                            type={type} id={`inline-${type}-1`} 
                                            value='65eec8e0b60e656b-01'
                                            onChange={handleChangeBibleVersion}
                                            defaultChecked={true} />
                                        <Form.Check 
                                            inline name="bibleversion" 
                                            label="King James (Authorised) Version" 
                                            type={type} id={`inline-${type}-2`} 
                                            value='de4e12af7f28f599-01' 
                                            onChange={handleChangeBibleVersion} />
                                        <Form.Check
                                            inline
                                            name="bibleversion" 
                                            label="American Standard Version"
                                            type={type}
                                            id={`inline-${type}-3`} 
                                            value="06125adad2d5898a-01"
                                            onChange={handleChangeBibleVersion}
                                        />
                                        <Form.Check
                                            inline
                                            name="bibleversion" 
                                            label="English Majority Text Version"
                                            type={type}
                                            id={`inline-${type}-4`} 
                                            value="55ec700d9e0d77ea-01"
                                            onChange={handleChangeBibleVersion}
                                        />
                                    </div>
  ))}
                            <Button type="submit">Search</Button>
                            
                        </Form>
                        <BibleVerseSearchResultsContainer />
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        
    )
}