import React, { Component } from 'react'
import { connect } from 'react-redux'
import { UserCard } from './userCard'
import { fetchUsers } from '../actions/fetchUsers'


class UsersContainer extends Component {

    componentDidMount() {
        //debugger
        //if ((this.props.loggingOut !== undefined) && (!this.props.loggingOut || !this.props.requestingUsers)) {
        if (!this.props.loggingOut) {
            this.props.fetchUsers(this.props.history)

        } 
            
        // } else {
            // this.props.history.push('/')
        // }
        
    }

    // shouldComponentUpdate(nextProps) {
    //     //debugger
    //     if (nextProps.currentUser !== undefined || nextProps.requestingCurrentUser || !nextProps.requestingCurrentUser) {
    //         return false
    //     } else {
    //         return true
    //     }
    // }

    render () {
        //debugger
        // if (this.props.loggedIn) {
            let users = this.props.users.users.map(function (user) {
                //debugger
                return (
                    <UserCard key={user.id} user={user} />
                )
            })
            return (
                <React.Fragment>
                    {users}
                </React.Fragment>
            )
        // } else {
        //     this.props.history.push('/')
        //     return (
        //         <React.Fragment>

        //         </React.Fragment>
        //     )
        // }
        
    }
}

function mapDispatchToProps(dispatch){
    return { 
        fetchUsers: (history) => dispatch(fetchUsers(history)),
        closeAlert: () => dispatch({type: 'CLOSE_ALERT'}),
        newRouteRequest: (payload) => dispatch({type: 'NEW_REQUEST', payload: payload}),
        newAlert: (payload) => dispatch({type: 'NEW_ALERT', payload: payload}),
    }

}

function mapStateToProps(state){
    return {
        loggedIn: !!state.user.currentUser.id,
        router: state.router,
        entries: state.entries.entries,
        currentUser: state.user.currentUser,
        users: state.users,
        loggingOut: state.user.loggingOut,
        requestingCurrentUser: state.user.requesting
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)