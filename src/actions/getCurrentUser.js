export function getCurrentUser() {
    return (dispatch) => {
      dispatch({ type: 'START_GET_CURRENT_USER_REQUEST' });

      fetch('http://localhost:3000/api/v1/get_current_user', {
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
            dispatch({ type: 'SET_CURRENT_USER', userData})


        })
    };
  }