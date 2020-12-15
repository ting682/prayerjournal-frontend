import { BASEURL } from './url'

export function fetchEntries() {
    return (dispatch) => {
        
      dispatch({ type: 'START_ADDING_ENTRIES_REQUEST' });
        
      return fetch(`${BASEURL}/api/v1/entries`, {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': 'http://localhost:3001'
        }
        })
        .then(response => response.json())
        .then(entries => { 
            //debugger
            dispatch({ type: 'GET_ENTRIES', entries})


        })
    };
  }