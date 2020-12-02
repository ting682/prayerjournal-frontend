import React, { Component } from 'react'

export default class EntryInput extends Component {
    constructor (props) {
        super(props)
        this.setState({
            content: ""
        })
    }

    handleChange = (event) => {
        this.setState(previousState => {
            return {
                ...previousState,
                [event.target.name]: event.target.value
            }
        })
    }

    render () {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input name="content" type="text" onChange={this.handleChange} value={this.state.content}></input>
                    <input type="submit">Submit journal entry</input>
                </form>
            </React.Fragment>
        )
    }
}