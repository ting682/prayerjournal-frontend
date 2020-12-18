
import './App.css';
import React, { Component } from 'react'
import { getCurrentUser } from './actions/getCurrentUser'

import { connect } from 'react-redux'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'


import EntriesContainer from './components/entriesContainer'
import LoginContainer from './components/loginContainer';
import UserContainer from './components/userContainer'
import UsersContainer from './components/usersContainer'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Home } from './components/home'
// import { User } from './components/user'
import { Signup } from './components/signup';
import { Button } from 'react-bootstrap'
import { postLogout } from './actions/postLogout';
import EditUserProfile from './components/editUserProfile';
// import { useHistory } from 'react-router-dom'
// // export const history = createBrowserHistory()
// import { useDispatch } from 'react-redux'
// // // const middleware = routerMiddleware(history)

// const store = createStore(rootReducer(history), compose(applyMiddleware(thunk, routerMiddleware(history)), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

class App extends Component {

  // const history = useHistory()
  // const dispatch = useDispatch()

  constructor(props) {
    super(props)

    this.handleLogout = this.handleLogout.bind(this)
  }

  componentDidMount() {
    this.props.getCurrentUser()
  }

  handleLogout = (history) => {
    //debugger
    this.props.postLogout(history)
  }
  
  render () {
    // this.props.getCurrentUser()
    //debugger
    if (this.props.loggedIn) {
      return (
      
        <React.Fragment>
            <Navbar bg="primary" variant="dark" expand="md" className="w-auto p-3">
              <Navbar.Brand href="#home">Prayer Journal</Navbar.Brand>
              
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                  
                <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
                <Nav.Link as={Link} to="/entries" className="nav-link">Entries</Nav.Link>
                {/* <Link to="/login" className="nav-link">Login</Link>
                <Link to="/signup" className="nav-link">Signup</Link> */}
                <Link to="/users" className="nav-link">Users</Link>
                <Nav.Link as={Link} to="/editprofile" className="nav-link">Profile</Nav.Link>
                <Button onClick={() => this.handleLogout(this.props.history)}>Logout</Button>
                </Nav>
                </Navbar.Collapse>
              
              {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
              </Form> */}

            </Navbar> 
          
            
              <Switch>
                <Route exact path="/" render={(props) => <Home  {...props} />} />
                <Route path="/entries" render={(props) => <EntriesContainer  {...props} />} />
                <Route path="/login" render={(props) => <LoginContainer {...props}/>} />
                <Route exact path="/users" render={(props) => <UsersContainer {...props} />} />
                <Route path="/users/:userId" render={(props) => <UserContainer {...props} />} />
                <Route path="/signup" render={(props) => <Signup {...props} />} />
                <Route path="/editprofile" render={props => <EditUserProfile {...props} />} />
              </Switch>
          
        </React.Fragment>
      )
    } else {
      return (
        <div>
            <Navbar bg="primary" variant="dark" expand="md">
              <Navbar.Brand href="#home">Prayer Journal</Navbar.Brand>
              
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                  
                <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
                
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/signup" className="nav-link">Signup</Link>
                {/* <Link to="/users" className="nav-link">Users</Link> */}
                
                </Nav>
                </Navbar.Collapse>
              
              {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
              </Form> */}

            </Navbar> 
          
            
              <Switch>
                <Route exact path="/" render={(props) => <Home  {...props} />} />
                <Route path="/entries" render={(props) => 
                  
                  <EntriesContainer  {...props} />
                } />
                <Route path="/login" render={(props) => <LoginContainer {...props}/>} />
                <Route exact path="/users" render={(props) => <UsersContainer {...props} />} />
                <Route path="/users/:userId" render={(props) => <UserContainer {...props} />} /> 
                <Route path="/signup" render={(props) => <Signup {...props} />} />
              </Switch>
          
        </div>
      )
    }
    

    
  }
    

}

const mapStateToProps = state => {
  //debugger
  return ({
    loggedIn: !!state.user.currentUser && state.user.currentUser.length !== 0,
    router: state.router,
    entries: state.entries.entries,
    currentUser: state.user.currentUser
  })
}

const mapDispatchToProps = dispatch => {
  return {
    getCurrentUser: () => dispatch(getCurrentUser()),
    postLogout: (history) => dispatch(postLogout(history))
  }
}

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App)
