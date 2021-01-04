

export function fetchUser(userId, history) {
    return (dispatch) => {
      dispatch({ type: 'START_GET_USER_REQUEST' });

      fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/${userId}`, {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': `${process.env.REACT_APP_API_URL}`
        }
        })
        .then(response => {
          if(response.ok) {
            return response.json()
          } else {
            dispatch({type: 'NEW_ALERT', payload: 'Please login'})
            dispatch({type: 'NEW_REQUEST', payload: `users/${userId}`})
            history.push('/login')
          }
          
        })
        .then(userData => { 
            //debugger
            dispatch({ type: 'GET_USER', userData})


        })
        .catch(error => {
          // history.push('/')
        })
    };
  }