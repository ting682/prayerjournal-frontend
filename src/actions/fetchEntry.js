

export function fetchEntry(history, entryId) {
    return (dispatch) => {
        
      dispatch({ type: 'START_ENTRY_REQUEST' });
        
      return fetch(`${process.env.REACT_APP_API_URL}/api/v1/entries/${entryId}`, {
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
            dispatch({type: 'NEW_ALERT', payload: 'Entry not found'})
            // dispatch({type: 'NEW_REQUEST', payload: `/entries/${entryId}`})
            history.push('/')
          }
          
        })
        .then(entry => { 
            //debugger
            dispatch({ type: 'GET_ENTRY', payload: entry})


        }).catch(error => {
          //debugger
        })
    };
  }