import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
// import { useDispatch } from 'react-redux'
import Mark from 'mark.js'

export const SearchEntries = (props) => {

    const [searchTerm, setSearchTerm] = useState('')
    // const dispatch = useDispatch()

    const handleChange = (event, handleSearch) => {
        setSearchTerm(event.target.value)
        handleSearch(event.target.value)

        
    }

    return (
        <Form>
            <Form.Control input="text" onChange={event => handleChange(event, props.handleSearch)} value={searchTerm}>

            </Form.Control>
            <Button>Search</Button>
        </Form>
    )
}