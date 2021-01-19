import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUserEntries } from '../actions/fetchUserEntries'
import { getCurrentUser } from '../actions/getCurrentUser'
import { Entry }  from './entry'
import { postLike } from '../actions/postLike'

import Mark from 'mark.js'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


class UserEntriesContainer extends Component {

    constructor(props) {
        super(props)
        //this.props.getCurrentUser()
        this.state = {
            searchTerm: '',
            sort: false
        }
    }
    

    componentDidMount = async () => {
     //debugger
        // if ((this.props.loggingOut !== undefined) && (!this.props.loggingOut)) {
        if (!this.props.loggingOut) {
            
            await this.props.fetchUserEntries(this.props.history, this.props.user.id)
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
        
        if (this.props.entries.length === 0  && this.props.entries.requesting) {
            return <Loader visible={this.state.loading} type="Grid" color="#00BFFF" height={80} width={80} style={{textAlign: "center"}}/>
        } else {
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

        

    }

            

    render () {
        //debugger
        // if(this.props.loggedIn) {
            
            //debugger
            return (
                <div id="entries">
                    
                    <br></br>

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

  export default connect(mapStateToProps, mapDispatchToProps)(UserEntriesContainer)
