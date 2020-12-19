import { BASEURL } from './url'

export function fetchUsers(history) {
    return (dispatch) => {
      dispatch({ type: 'START_GET_USERS_REQUEST' });
      //debugger
      fetch(`${BASEURL}/api/v1/users/`, {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': 'http://localhost:3001'
        }
        })
        .then(response => {
          //debugger
          if(response.ok) {
            return response.json()
          } else {
            dispatch({type: 'NEW_ALERT', payload: 'Please login'})
            history.push('/')
          }
          
        })
        .then(userData => { 
            //debugger
            dispatch({ type: 'GET_USERS', userData})


        })
        .catch(error => {
          //history.push('/')
        })
    };
  }