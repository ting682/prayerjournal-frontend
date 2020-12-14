import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import { ConnectedRouter } from 'connected-react-router'
// import { Route, Switch } from 'react-router'
// import EntriesContainer from './components/entriesContainer'
// import LoginContainer from './components/loginContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { rootReducer } from './reducers/reducers'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { ConnectedRouter } from 'connected-react-router'


export const history = createBrowserHistory()

// // const middleware = routerMiddleware(history)

const store = createStore(rootReducer(history), compose(applyMiddleware(thunk, routerMiddleware(history)), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))


ReactDOM.render(
  <Provider store={store}>
      <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
        <App history={history} />
      </ConnectedRouter>
    </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
