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
          'Access-Control-Allow-Origin': `${BASEURL}`
        }
        })
        .then(response => {
          //debugger
          if(response.ok) {
            return response.json()
          } else {
            dispatch({type: 'NEW_ALERT', payload: 'Please login'})
            dispatch({type: 'NEW_REQUEST', payload: '/users'})
            // debugger
            history.push('/login')
          }
          
        })
        .then(userData => { 
            //debugger
            if (userData) {
              dispatch({ type: 'GET_USERS', userData})
            } else {
              
            }
            


        })
        .catch(error => {
          //history.push('/')
        })
    };
  }