import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchEntries } from '../actions/fetchEntries'
import { Entry }  from './entry'
import TimeAgo from 'javascript-time-ago'
 
// English.
import en from 'javascript-time-ago/locale/en'
 
TimeAgo.addDefaultLocale(en)

class EntriesContainer extends Component {

    handleClick = (event) => {
        this.props.fetchEntries()
    }

    componentDidMount = () => {
        this.props.fetchEntries()
    }

    render () {
        
        //debugger
        const entries = this.props.entries.map(entry => <Entry key={entry.id} entry={entry.attributes} comments={entry.comments} likes={entry.likes} />)
        //debugger
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
        entries: state.entries.entries,
        currentUser: state.currentUser
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(EntriesContainer)
