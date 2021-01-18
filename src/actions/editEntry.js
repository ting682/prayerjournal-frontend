

export function editEntry(entry, entryId, blogId) {
    return (dispatch) => {
      dispatch({ type: 'START_EDIT_ENTRY' });
      // debugger
      fetch(`${process.env.REACT_APP_API_URL}/api/v1/entries/${entryId}`, {
        credentials: "include",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': `${process.env.REACT_APP_API_URL}`
        },

        body: JSON.stringify({
            entry
        })
        })
        .then(response => response.json())
        .then(entry => { 
            // debugger
            if (blogId !== null) {
              dispatch({ type: 'EDIT_BLOG_ENTRY', entry})
            } else {
              dispatch({ type: 'EDIT_ENTRY', entry})
            }
            
            //dispatch({ type: 'ADD_ENTRIES', entries})

            //history.push("/entries")
        })
    };
  }