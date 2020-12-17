import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
// import { useDispatch } from 'react-redux'


export const SearchEntries = (props) => {

    const [searchTerm, setSearchTerm] = useState('')
    // const dispatch = useDispatch()

    const handleSubmit = (event, handleSearch) => {
        
        event.preventDefault()
        //debugger
        handleSearch(searchTerm)
        
    }

    const handleChange = (event, handleSearch) => {
        //debugger
        
        setSearchTerm(event.target.value)
        if(event.target.value === '') {
            handleSearch('')
        }
        //handleSearch(searchTerm)
    }

    return (
        <Form onSubmit={event => handleSubmit(event, props.handleSearch)} >
            <Form.Control name="search" input="text" onChange={event => handleChange(event, props.handleSearch)} value={searchTerm}>

            </Form.Control>
            <Button type="submit">Search</Button>
        </Form>
    )
}