import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchEntries } from '../actions/fetchEntries'
import { Entry }  from './entry'

class EntriesContainer extends Component {
    

    handleClick = (event) => {
        this.props.fetchEntries()
    }

    render () {
        
        //debugger
        const entries = this.props.entries.map(entry => <Entry key={entry.id} entry={entry.attributes} />)
        debugger
        return (
            <div>Entries
                <button onClick={(event) => this.handleClick(event)} >Fetch entries</button>
                {entries}
            </div>
        )
    }
};

function mapDispatchToProps(dispatch){
    return { fetchEntries: () => dispatch(fetchEntries()) }
  }

  function mapStateToProps(state){
    return {
        router: state.router,
        entries: state.entries.entries
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(EntriesContainer)
