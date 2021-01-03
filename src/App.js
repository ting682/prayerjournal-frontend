
import './App.css';
import React, { Component } from 'react'
import { getCurrentUser } from './actions/getCurrentUser'

import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router'
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
import { Alert, Button } from 'react-bootstrap'
import { postLogout } from './actions/postLogout';
import EditUserProfile from './components/editUserProfile';
import NotFound from './components/404'
import { fetchVerse } from './actions/fetchVerse'
import JournalEntriesContainer from './components/journalEntriesContainer'
import EntryShow from './components/entryShow';

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
    //debugger
    this.props.getCurrentUser(this.props.history)
    this.props.fetchVerse()
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
            <Navbar bg="light" expand="md" className="w-auto p-3">
              <Navbar.Brand href="#home">
              <img className="logo" src="https://prayerjournal.place/prayer_journal_logo.gif" width="200" height="100" alt="Prayer Journal Logo" />
              </Navbar.Brand>
              
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                  
                <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
                <Nav.Link as={Link} to="/entries" className="nav-link">Entries</Nav.Link>
                {/* <Link to="/login" className="nav-link">Login</Link>
                <Link to="/signup" className="nav-link">Signup</Link> */}
                <Link to="/users" className="nav-link">Users</Link>
                <Nav.Link as={Link} to="/editprofile" className="nav-link">Profile</Nav.Link>
                <Nav.Link as={Link} to="/myjournal" className="nav-link">Journal</Nav.Link>
                <Button onClick={() => this.handleLogout(this.props.history)}>Logout</Button>
                </Nav>
                </Navbar.Collapse>
              
              {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
              </Form> */}

            </Navbar> 
            <Alert variant="warning" show={this.props.alerts.display} onClose={() => this.props.closeAlert()} dismissible >
                {this.props.alerts.alert[0]}
            </Alert>
            
              <Switch>
                <Route exact path="/" render={(props) => <Home  {...props} verse={this.props.verse} />} />
                <Route exact path="/entries" render={(props) => <EntriesContainer  {...props}  verse={this.props.verse} />} />
                <Route path="/entries/:entryId" render={(props) => <EntryShow {...props} />} />
                <Route path="/login" render={(props) => <LoginContainer {...props}/>} />
                <Route exact path="/users" render={(props) => <UsersContainer {...props} />} />
                <Route path="/users/:userId" render={(props) => <UserContainer {...props} />} />
                <Route path="/myjournal" render={(props) => <JournalEntriesContainer {...props} />} />
                <Route path="/signup" render={(props) => <Signup {...props} />} />
                <Route path="/editprofile" render={props => <EditUserProfile {...props} />} />
                <Route path="*" component={NotFound} />
              </Switch>
          
        </React.Fragment>
      )
    } else {
      return (
        <div>
            <Navbar bg="light" expand="md">
              <Navbar.Brand href="#home">
                <img className="logo" src="https://prayerjournal.place/prayer_journal_logo.gif" width="200" height="100" alt="Prayer Journal Logo" />
              </Navbar.Brand>
              
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                  
                <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
                <Nav.Link as={Link} to="/entries" className="nav-link">Entries</Nav.Link>
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
            <Alert variant="warning" show={this.props.alerts.display} onClose={() => this.props.closeAlert()} dismissible >
                {this.props.alerts.alert[0]}
              </Alert>
            
              <Switch>
                <Route exact path="/" render={(props) => <Home  {...props} verse={this.props.verse} />} />
                <Route exact path="/entries" render={(props) => <EntriesContainer  {...props}  verse={this.props.verse} />} />
                <Route path="/entries/:entryId" render={(props) => <EntryShow {...props} />} />
                {/* <Route path="/entries" render={(props) => {
                  if (this.props.loggedIn) {
                    return <EntriesContainer  {...props} verse={this.props.verse}/>
                  } else {
                    this.props.newAlert('Please login')
                    this.props.newRouteRequest('/entries')
                    return <Redirect to="/login" />
                  }
                }} /> */}
                <Route path="/login" render={(props) => <LoginContainer {...props}/>} />
                <Route exact path="/users" render={(props) => <UsersContainer {...props} />} />
                <Route path="/users/:userId" render={(props) => <UserContainer {...props} />} /> 
                <Route path="/signup" render={(props) => <Signup {...props} />} />
                <Route path="/myjournal" render={(props) => {
                  
                  if (this.props.loggedIn) {
                    return <JournalEntriesContainer {...props} />
                  } else {
                    this.props.newAlert('Please login')
                    this.props.newRouteRequest('/myjournal')
                    
                    return <Redirect to="/login" />
                  }}} />
                
                <Route path="/editprofile" render={props => {
                  
                  if (this.props.loggedIn) {
                    return <EditUserProfile {...props} />
                  } else {
                    this.props.newAlert('Please login')
                    this.props.newRouteRequest('/editprofile')
                    return <Redirect to="/login" />
                  }}} />
                  <Route path="*" component={NotFound} />
              </Switch>
              
        </div>
      )
    }
    

    
  }
    

}

const mapStateToProps = state => {
  //debugger
  return ({
    loggedIn: !!state.user.currentUser.id,
    router: state.router,
    entries: state.entries.entries,
    currentUser: state.user.currentUser,
    alerts: state.alerts,
    routeRequest: state.routeRequest,
    verse: state.verse.verse
  })
}

const mapDispatchToProps = dispatch => {
  return {
    getCurrentUser: (history) => dispatch(getCurrentUser(history)),
    postLogout: (history) => dispatch(postLogout(history)),
    closeAlert: () => dispatch({type: 'CLOSE_ALERT'}),
    newRouteRequest: (payload) => dispatch({type: 'NEW_REQUEST', payload: payload}),
    newAlert: (payload) => dispatch({type: 'NEW_ALERT', payload: payload}),
    fetchVerse: () => dispatch(fetchVerse())
  }
}

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App)
