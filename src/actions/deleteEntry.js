

export function deleteEntry(data) {
    return (dispatch) => {
      dispatch({ type: 'START_DELETE_ENTRY' });
        //debugger
      fetch(`${process.env.REACT_APP_API_URL}/api/v1/entries/${data.entry.entryId}`, {
        credentials: "include",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': `${process.env.REACT_APP_API_URL}`
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