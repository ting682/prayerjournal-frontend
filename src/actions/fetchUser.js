export function fetchUser(userId) {
    return (dispatch) => {
      dispatch({ type: 'START_GET_USER_REQUEST' });

      fetch(`http://localhost:3000/api/v1/users/${userId}`, {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': 'http://localhost:3001'
        }
        })
        .then(response => response.json())
        .then(userData => { 
            //debugger
            dispatch({ type: 'GET_USER', userData})


        })
    };
  }