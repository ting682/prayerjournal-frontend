

export function fetchUserEntries(history, userId) {
    return (dispatch) => {
        
      dispatch({ type: 'START_ADDING_ENTRIES_REQUEST' });
        
      return fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/${userId}/entries`, {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
        })
        .then(response => {
          //debugger
          if (response.ok) {
            return response.json()
          } else {
            dispatch({type: 'NEW_ALERT', payload: 'Please login'})
            dispatch({type: 'NEW_REQUEST', payload: '/myjournal'})
            history.push('/login')
          }
          
        })
        .then(entries => { 
            //debugger
            dispatch({ type: 'GET_ENTRIES', entries})


        }).catch(error => {
          //debugger
        })
    };
  }