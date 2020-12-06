import React, { Component } from 'react'
import { connect } from 'react-redux'
import { UserCard } from './userCard'
import { fetchUsers } from '../actions/fetchUsers'

class UsersContainer extends Component {

    componentDidMount() {
        this.props.fetchUsers()
    }

    render () {
        //debugger
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
    }
}

function mapDispatchToProps(dispatch){
    return { fetchUsers: (userId) => dispatch(fetchUsers(userId)) }

}

function mapStateToProps(state){
    return {
        loggedIn: !!state.user.currentUser,
        router: state.router,
        entries: state.entries.entries,
        currentUser: state.user.currentUser,
        users: state.users
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)