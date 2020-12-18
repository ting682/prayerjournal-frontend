import React, { Component } from 'react'
import { connect } from 'react-redux'
import { UserCard } from './userCard'
import { fetchUsers } from '../actions/fetchUsers'

class UsersContainer extends Component {

    componentDidMount() {
        // if(this.props.loggedIn) {
            //debugger
            this.props.fetchUsers(this.props.history)
        // } else {
            // this.props.history.push('/')
        // }
        
    }

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
    return { fetchUsers: (history) => dispatch(fetchUsers(history)) }

}

function mapStateToProps(state){
    return {
        loggedIn: !!state.user.currentUser && state.user.currentUser.length !== 0,
        router: state.router,
        entries: state.entries.entries,
        currentUser: state.user.currentUser,
        users: state.users
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)