import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUserEntries } from '../actions/fetchUserEntries'
import { getCurrentUser } from '../actions/getCurrentUser'
import { Entry }  from './entry'
import { postLike } from '../actions/postLike'
import VerseOfTheDay from './verseOfTheDay'

import { SearchEntries } from './searchEntries'
import Mark from 'mark.js'
import JournalEntryInput from './journalEntryInput'


class JournalEntriesContainer extends Component {

    constructor(props) {
        super(props)
        //this.props.getCurrentUser()
        this.state = {
            searchTerm: '',
            sort: false
        }
    }
    

    componentDidMount = () => {
     //debugger
        // if ((this.props.loggingOut !== undefined) && (!this.props.loggingOut)) {
        if (!this.props.loggingOut) {
            this.props.fetchUserEntries(this.props.history, this.props.currentUser.id)
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
        // let allEntries = this.props.entries
        // if (this.state.sort) {
        //     allEntries = this.props.entries.sort(function(entryA, entryB) {
        //         if(entryA.attributes.updated_at < entryB.attributes.updated_at) {
        //             return 1
        //         } else {
        //             return -1
        //         }

        //     })
        // }
        if (this.state.searchTerm === '') {
                //debugger
                return this.props.entries.map(entry => {
            
                return <Entry key={entry.id} entryId={entry.id} entry={entry.attributes} comments={entry.comments} likes={entry.likes} prayers={entry.prayers} {...this.props} search={this.state.searchTerm}/>
            }, this)
    
        } else {
            return this.props.entries.filter(entry => {
                //debugger
                
                return entry.entryText.includes(this.state.searchTerm)
            }, this).map(entry => {
            
                return <Entry key={entry.id} entryId={entry.id} entry={entry.attributes} comments={entry.comments} likes={entry.likes} prayers={entry.prayers} {...this.props} search={this.state.searchTerm} />
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
                    {/*<button onClick={this.sortEntries} >Sort by newest</button> */}
                    <VerseOfTheDay {...this.props} verse={this.props.verse} ></VerseOfTheDay><br />
                    
                    
                    <br></br>
                     
                    
                    <JournalEntryInput />
                    <br></br>
                    <SearchEntries {...this.props} handleSearch={this.handleSearch}/>
                    {this.mapEntries()} 
                </div>
            )
 
        
        
    }
};

function mapDispatchToProps(dispatch){
    return { 
        fetchUserEntries: (history, userId) => dispatch(fetchUserEntries(history, userId)),
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
        requestingEntries: state.entries.requesting,
        alerts: state.alerts,
        verse: state.verse.verse
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(JournalEntriesContainer)
