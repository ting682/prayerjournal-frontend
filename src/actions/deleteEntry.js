export function deleteEntry(data) {
    return (dispatch) => {
      dispatch({ type: 'START_DELETE_ENTRY' });
        //debugger
      fetch(`http://localhost:3000/api/v1/entries/${data.entry.entryId}`, {
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