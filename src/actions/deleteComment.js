import { BASEURL } from './url'

export function deleteComment(data, history) {
    return (dispatch) => {
      dispatch({ type: 'START_DELETE_COMMENT' });
        //debugger
      fetch(`${BASEURL}/api/v1/entries/${data.comment.entryId}/comments/${data.comment.commentId}`, {
        credentials: "include",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': `${BASEURL}`
        }
        })
        .then(response => response.json())
        .then(comment => { 
            //debugger
            dispatch({ type: 'DELETE_COMMENT', payload: { 
                entryId: data.comment.entryId,
                commentId: data.comment.commentId
            }})
            //dispatch({ type: 'ADD_ENTRIES', entries})

            //history.push("/entries")
        })
    };
  }