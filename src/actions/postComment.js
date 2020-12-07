export function postComment(data, history) {
    return (dispatch) => {
      dispatch({ type: 'START_NEW_COMMENT' });
        //debugger
      fetch('http://localhost:3000/api/v1/comments', {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': 'http://localhost:3001'
        },

        body: JSON.stringify({
            comment: {
                content: data.content,
                user_id: data.userId,
                entry_id: data.entryId
            }
        })
        })
        .then(response => response.json())
        .then(comment => { 
            
            dispatch({ type: 'ADD_COMMENT', payload: { 
                entryId: data.entryId,
                userId: data.userId,
                comment: comment
            }})
            //dispatch({ type: 'ADD_ENTRIES', entries})

            history.push("/entries")
        })
    };
  }