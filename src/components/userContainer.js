import React, { Component } from 'react'
import { connect } from 'react-redux'
import { User } from './user'
import { fetchUser } from '../actions/fetchUser'

class UserContainer extends Component {


    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
        
    }

    render () {
        //debugger
        let user = this.props.users.find(function (user) {
            //debugger
            return user.id === this.props.match.params.userId
        }, this)

        if (user !== undefined) {
            return (
                <React.Fragment>
                    <User user={user} />
                </React.Fragment>
            )
        } else {
            return (
                <div>
                    Loading
                </div>
            )
        }

        
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
        users: state.users.users
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)