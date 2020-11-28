import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchEntries } from '../actions/fetchEntries'
import { Entry }  from './entry'

class EntriesContainer extends Component {
    

    handleClick = (event) => {
        this.props.fetchEntries()
    }

    render () {
        
        debugger
        //const entries = this.props.entries.map(entry => <Entry key={entry.id} entry={entry} />)
        return (
            <div>Entries
                <button onClick={(event) => this.handleClick(event)} >Fetch entries</button>
                
            </div>
        )
    }
};

function mapDispatchToProps(dispatch){
    return { fetchEntries: () => dispatch(fetchEntries()) }
  }

  function mapStateToProps(state){
    return {
        state}
  }

  export default connect(mapStateToProps, mapDispatchToProps)(EntriesContainer)
