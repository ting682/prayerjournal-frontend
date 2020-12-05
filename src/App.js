
import './App.css';
import React from 'react'
import { getCurrentUser } from './actions/getCurrentUser'

import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router'
import { Link } from 'react-router-dom'


import EntriesContainer from './components/entriesContainer'
import LoginContainer from './components/loginContainer';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Home } from './components/home'
// export const history = createBrowserHistory()

// // // const middleware = routerMiddleware(history)

// const store = createStore(rootReducer(history), compose(applyMiddleware(thunk, routerMiddleware(history)), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

class App extends React.Component {

  componentDidMount() {
    //debugger
    // this.props.getCurrentUser()
  }

  render () {
    //debugger
    return (
      
          <div>
               <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Prayer Journal</Navbar.Brand>
                <Nav className="mr-auto">
                  <Link to="/" className="nav-link">Home</Link>
                  <Link to="/entries" className="nav-link">Entries</Link>
                  <Link to="/login" className="nav-link">Login</Link>
                  <Link to="/users" className="nav-link">Users</Link>
                </Nav>
                {/* <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-light">Search</Button>
                </Form> */}

              </Navbar> 
            
              
                <Switch>
                  <Route exact path="/" render={(props) => <Home  {...props} />} />
                  <Route exact path="/entries" render={(props) => <EntriesContainer  {...props} />} />
                  <Route exact path="/login" render={(props) => <LoginContainer {...props} />} />
                </Switch>
             
            
            
          </div>
          
        
      
    )
  }
  
  
    
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    router: state.router,
    entries: state.entries.entries,
    currentUser: state.currentUser
  })
}

export default connect(mapStateToProps, { getCurrentUser })(App);
// export default connect(null, null)(App)
