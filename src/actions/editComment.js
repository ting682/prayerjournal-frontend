import { BASEURL } from './url'

export function editComment(data, commentId) {
    return (dispatch) => {
      dispatch({ type: 'START_EDIT_COMMENT' });
        //debugger
      fetch(`${BASEURL}/api/v1/entries/${data.comment.entry_id}/comments/${commentId}`, {
        credentials: "include",
        method: "PATCH",
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
            dispatch({ type: 'EDIT_COMMENT', payload: { 
                entryId: data.comment.entry_id,
                userId: data.comment.user_id,
                comment: comment
            }})
            //dispatch({ type: 'ADD_ENTRIES', entries})

            //history.push("/entries")
        })
    };
  }