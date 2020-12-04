
import './App.css';
import React from 'react'
import { getCurrentUser } from './actions/getCurrentUser'
import { Route, Switch, withRouter } from 'react-router'
import { connect } from 'react-redux'
import { rootReducer } from './reducers/reducers'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { ConnectedRouter } from 'connected-react-router'
import EntriesContainer from './components/entriesContainer'
import LoginContainer from './components/loginContainer';

export const history = createBrowserHistory()

// const middleware = routerMiddleware(history)

const store = createStore(rootReducer(history), compose(applyMiddleware(thunk, routerMiddleware(history)), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render () {
    //debugger
    return (
      <div>
        
          <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
            <> { /* your usual react-router v4/v5 routing */ }
              <Switch>
                <Route exact path="/" render={(props) => <App  {...props} />} />
                <Route exact path="/entries" render={(props) => <EntriesContainer  {...props} />} />
                <Route exact path="/login" render={(props) => <LoginContainer {...props} />} />
              </Switch>
            </>
          </ConnectedRouter>
          
        
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
