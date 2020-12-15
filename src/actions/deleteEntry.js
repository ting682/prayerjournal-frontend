import { BASEURL } from './url'

export function deleteEntry(data) {
    return (dispatch) => {
      dispatch({ type: 'START_DELETE_ENTRY' });
        //debugger
      fetch(`${BASEURL}/api/v1/entries/${data.entry.entryId}`, {
        credentials: "include",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': 'http://localhost:3001'
        }
        })
        .then(response => response.json())
        .then(entry => { 
            //debugger
            dispatch({ type: 'DELETE_ENTRY', payload: { 
                entryId: data.entry.entryId
            }})
            
        })
    };
  }