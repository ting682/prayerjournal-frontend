export function editEntry(data) {
    return (dispatch) => {
      dispatch({ type: 'START_EDIT_ENTRY' });
        //debugger
      fetch(`http://localhost:3000/api/v1/entries/${data.entry.entry_id}`, {
        credentials: "include",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': 'http://localhost:3001'
        },

        body: JSON.stringify({
            entry: {
                content: data.entry.content,
                user_id: data.entry.user_id
            }
        })
        })
        .then(response => response.json())
        .then(entry => { 
            //debugger
            dispatch({ type: 'EDIT_ENTRY', entry})
            //dispatch({ type: 'ADD_ENTRIES', entries})

            //history.push("/entries")
        })
    };
  }