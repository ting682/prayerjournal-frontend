import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchEntries } from '../actions/fetchEntries'
import { getCurrentUser } from '../actions/getCurrentUser'
import { Entry }  from './entry'
import TimeAgo from 'javascript-time-ago'
import EntryInput from './entryInput'
import { postLike } from '../actions/postLike'

// English.
import en from 'javascript-time-ago/locale/en'
 
TimeAgo.addDefaultLocale(en)

class EntriesContainer extends Component {

    constructor(props) {
        super(props)
        //this.props.getCurrentUser()
    }

    componentDidMount() {
        
    }

    handleClick = (event) => {
        this.props.fetchEntries()
    }

    componentDidMount = () => {
        if (this.props.loggedIn) {
            this.props.fetchEntries()
        } else {
            this.props.history.push('/')
        }
        
    }



    render () {
        //debugger
        if(this.props.loggedIn) {
            const entries = this.props.entries.map(entry => {
            
                return <Entry key={entry.id} entryId={entry.id} entry={entry.attributes} comments={entry.comments} likes={entry.likes} {...this.props} />
            }, this)
            //debugger
            return (
                <React.Fragment>
                    
                    <br></br>
                    {/* <button onClick={(event) => this.handleClick(event)} >Fetch entries</button> */}
                    <EntryInput />
                    {entries}
                </React.Fragment>
            )
        } else {
            this.props.history.push('/')
            return (
                <React.Fragment>

                </React.Fragment>
            )
            
        }
        
        
    }
};

function mapDispatchToProps(dispatch){
    return { 
        fetchEntries: () => dispatch(fetchEntries()),
        getCurrentUser: () => dispatch(getCurrentUser()),
        postLike: () => dispatch(postLike())
    }
  }

  function mapStateToProps(state){
    //debugger
    return {
        loggedIn: !!state.user.currentUser && state.user.currentUser.length !== 0,
        router: state.router,
        entries: state.entries.entries,
        currentUser: state.user.currentUser
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(EntriesContainer)
