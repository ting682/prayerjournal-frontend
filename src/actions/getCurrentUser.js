

export function getCurrentUser(history) {
    return (dispatch) => {
      dispatch({ type: 'START_GET_CURRENT_USER_REQUEST' });

      fetch(`${process.env.REACT_APP_API_URL}/api/v1/get_current_user`, {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': `${process.env.REACT_APP_API_URL}`
        }
        })
        .then(response => response.json())
        .then(userData => { 
            //debugger
            if (userData.error) {
              
            } else {
              dispatch({ type: 'CLOSE_ALERT'})
              dispatch({ type: 'GET_CURRENT_USER', userData})
            }
            


        })
        .catch(error => {
          history.push('/')
        })
    };
  }