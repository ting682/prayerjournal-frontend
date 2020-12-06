export function fetchUsers() {
    return (dispatch) => {
      dispatch({ type: 'START_GET_USERS_REQUEST' });

      fetch(`http://localhost:3000/api/v1/users/`, {
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
            dispatch({ type: 'GET_USERS', userData})


        })
    };
  }