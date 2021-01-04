

export function editUser(user, currentUserId, history) {
    return (dispatch) => {
      dispatch({ type: 'START_EDIT_PROFILE' });
        //debugger
      fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/${currentUserId}`, {
        credentials: "include",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': `${process.env.REACT_APP_API_URL}`
        },

        body: JSON.stringify({
            user
        })
        })
        .then(response => response.json())
        .then(userData => { 
            //debugger
            dispatch({ type: 'EDIT_PROFILE', payload: userData})
            
            history.push(`/users/${currentUserId}`)
        })
    };
  }