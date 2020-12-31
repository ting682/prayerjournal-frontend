import { BASEURL } from './url'

export function getCurrentUser(history) {
    return (dispatch) => {
      dispatch({ type: 'START_GET_CURRENT_USER_REQUEST' });

      fetch(`${BASEURL}/api/v1/get_current_user`, {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': `${BASEURL}`
        }
        })
        .then(response => response.json())
        .then(userData => { 
            //debugger
            dispatch({ type: 'CLOSE_ALERT'})
            dispatch({ type: 'GET_CURRENT_USER', userData})


        })
        .catch(error => {
          history.push('/')
        })
    };
  }