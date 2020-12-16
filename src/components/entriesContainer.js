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
 
TimeAgo.addDefaultLocale(en)

class EntriesContainer extends Component {

    constructor(props) {
        super(props)
        //this.props.getCurrentUser()
        this.state = {
            searchTerm: ''
        }
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

    handleSearch = (term) => {
        this.setState(previousState => {
            return {
                ...previousState,
                searchTerm: term
            }
        })
        this.mapEntries()
    }

    mapEntries = () => {
        
        if (this.state.searchTerm === '') {
                //debugger
                return this.props.entries.map(entry => {
            
                return <Entry key={entry.id} entryId={entry.id} entry={entry.attributes} comments={entry.comments} likes={entry.likes} {...this.props} />
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
        if(this.props.loggedIn) {
            
            //debugger
            return (
                <div id="entries">
                    
                    <br></br>
                    <SearchEntries {...this.props} handleSearch={this.handleSearch}/>
                    <br></br>
                    {/* <button onClick={(event) => this.handleClick(event)} >Fetch entries</button> */}
                    <EntryInput />
                    {this.mapEntries(this.state.searchTerm)}
                </div>
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
