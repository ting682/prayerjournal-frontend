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
import { SearchEntries } from './searchEntries'
import Mark from 'mark.js'

TimeAgo.addDefaultLocale(en)

class EntriesContainer extends Component {

    constructor(props) {
        super(props)
        //this.props.getCurrentUser()
        this.state = {
            searchTerm: ''
        }
    }

    // handleClick = (event) => {
    //     this.props.fetchEntries()
    // }
    

    componentDidMount = () => {
     //debugger
        // if ((this.props.loggingOut !== undefined) && (!this.props.loggingOut)) {
        if (!this.props.loggingOut) {
            this.props.fetchEntries(this.props.history)
        }
        
    }

    handleSearch = (term) => {
        //debugger
        this.setState(previousState => {
            return {
                ...previousState,
                searchTerm: term.toLowerCase()
            }
        })
        this.mapEntries()
        this.highlightSearch(term)
        
    }



    highlightSearch = (term) => {
        if (term === '') {
            for (const entry of document.getElementsByClassName('entryContent')) {
                //debugger
                let instance = new Mark(entry)
                instance.unmark()
            }
        } else {
            for (const entry of document.getElementsByClassName('entryContent')) {
                //debugger
                let instance = new Mark(entry)
                instance.mark(term)
            }
        }
        

    }

    mapEntries = () => {
        //debugger
        if (this.state.searchTerm === '') {
                //debugger
                return this.props.entries.map(entry => {
            
                return <Entry key={entry.id} entryId={entry.id} entry={entry.attributes} comments={entry.comments} likes={entry.likes} {...this.props} search={this.state.searchTerm}/>
            }, this)
    
        } else {
            return this.props.entries.filter(entry => {
                //debugger
                // let tempDiv = document.createElement('div')
                // tempDiv.innerHTML = entry.attributes.content
                
                // if (entry.comments.length > 0) {
                //     for(const comment of entry.comments) {
                //         tempDiv.innerHTML += " " + comment.attributes.content
                //     }
                // }
                
                //debugger

                // return tempDiv.textContent.toLowerCase().includes(this.state.searchTerm)
                return entry.entryText.includes(this.state.searchTerm)
            }, this).map(entry => {
            
                return <Entry key={entry.id} entryId={entry.id} entry={entry.attributes} comments={entry.comments} likes={entry.likes} {...this.props} search={this.state.searchTerm} />
            }, this)
        }

    }

    render () {
        //debugger
        // if(this.props.loggedIn) {
            
            //debugger
            return (
                <div id="entries">
                    
                    <br></br>
                    
                    <SearchEntries {...this.props} handleSearch={this.handleSearch}/>
                    <br></br>
                    {/* <button onClick={(event) => this.handleClick(event)} >Fetch entries</button>*/} 
                    <EntryInput />
                    {this.mapEntries(this.state.searchTerm)} 
                </div>
            )
        // } else {
        //     //debugger
        //     this.props.history.push('/')
        //     return (
        //         <React.Fragment>
        //             hello
        //         </React.Fragment>
        //     )
            
        // }
        
        
    }
};

function mapDispatchToProps(dispatch){
    return { 
        fetchEntries: (history) => dispatch(fetchEntries(history)),
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
        currentUser: state.user.currentUser,
        loggingOut: state.user.loggingOut,
        requestingEntries: state.entries.requesting
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(EntriesContainer)
