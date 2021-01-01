import { BASEURL } from './url'

export function fetchEntry(history, entryId) {
    return (dispatch) => {
        
      dispatch({ type: 'START_ENTRY_REQUEST' });
        
      return fetch(`${BASEURL}/api/v1/entries/${entryId}`, {
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
            dispatch({type: 'NEW_REQUEST', payload: `/entries/${entryId}`})
            history.push('/login')
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