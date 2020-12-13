
import './App.css';
import React from 'react'
import { getCurrentUser } from './actions/getCurrentUser'

import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router'
import { Link } from 'react-router-dom'


import EntriesContainer from './components/entriesContainer'
import LoginContainer from './components/loginContainer';
import UserContainer from './components/userContainer'
import UsersContainer from './components/usersContainer'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Home } from './components/home'
import { User } from './components/user'
import { Signup } from './components/signup';
import { Button } from 'react-bootstrap'
import { postLogout } from './actions/postLogout';
import { useHistory } from 'react-router-dom'
// export const history = createBrowserHistory()
import { useDispatch } from 'react-redux'
// // // const middleware = routerMiddleware(history)

// const store = createStore(rootReducer(history), compose(applyMiddleware(thunk, routerMiddleware(history)), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

const App = (props) => {

  const history = useHistory()
  const dispatch = useDispatch()

  const handleLogout = (history) => {
    //debugger
    dispatch(postLogout(history))
  }
  
  
    return (
      
          <div>
               <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Prayer Journal</Navbar.Brand>
                <Nav className="mr-auto">
                  <Link to="/" className="nav-link">Home</Link>
                  <Link to="/entries" className="nav-link">Entries</Link>
                  <Link to="/login" className="nav-link">Login</Link>
                  <Link to="/signup" className="nav-link">Signup</Link>
                  <Link to="/users" className="nav-link">Users</Link>
                  <Button onClick={() => handleLogout(history)}>Logout</Button>
                </Nav>
                {/* <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-light">Search</Button>
                </Form> */}

              </Navbar> 
            
              
                <Switch>
                  <Route exact path="/" render={(props) => <Home  {...props} />} />
                  <Route exact path="/entries" render={(props) => <EntriesContainer  {...props} />} />
                  <Route exact path="/login" render={(props) => <LoginContainer {...props}/>} />
                  <Route exact path="/users" render={(props) => <UsersContainer {...props} />} />
                  <Route path="/users/:userId" render={(props) => <UserContainer {...props} />} />
                  <Route exact path="/signup" render={(props) => <Signup {...props} />} />
                </Switch>
             
            
            
          </div>
          
        
      
    )
  
  
  
    
}

// const mapStateToProps = state => {
//   return ({
//     loggedIn: !!state.currentUser,
//     router: state.router,
//     entries: state.entries.entries,
//     currentUser: state.currentUser
//   })
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getCurrentUser: () => dispatch(getCurrentUser()),
//     postLogout: () => dispatch(postLogout())
//   }
// }

export default App;
// export default connect(null, null)(App)
