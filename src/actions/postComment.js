export function postComment(data) {
    return (dispatch) => {
      dispatch({ type: 'START_NEW_COMMENT' });
        //debugger
      fetch(`http://localhost:3000/api/v1/entries/${data.comment.entry_id}/comments`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': 'http://localhost:3001'
        },

        body: JSON.stringify({
            comment: {
                content: data.comment.content,
                user_id: data.comment.user_id,
                entry_id: data.comment.entry_id
            }
        })
        })
        .then(response => response.json())
        .then(comment => { 
            //debugger
            dispatch({ type: 'NEW_COMMENT', payload: { 
                entryId: data.comment.entry_id,
                userId: data.comment.user_id,
                comment: comment
            }})
            //dispatch({ type: 'ADD_ENTRIES', entries})

            //history.push("/entries")
        })
    };
  }