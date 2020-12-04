import React, { Component } from 'react'
import { connect } from 'react-redux'

class UsersContainer extends Component {

    componentDidMount() {

    }

    render () {
        let users = this.props.users.map(function (user) {
            return (
                <User key={user.id} user={user} />
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
    return { fetchUser: (userId) => dispatch(fetchUser(userId)) }

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